import "@/db/envConfig";

import { sql } from "@vercel/postgres";
import { fromUnixTime } from "date-fns";
import { eq, isNull, lt, or, type SQLWrapper } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { drizzle, VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import { createPublicClient } from "viem";
import { mainnet } from "viem/chains";
import { http } from "wagmi";
import { z } from "zod";

import * as schema from "@/db/schema";
import { fetchCoinbaseAttestation } from "@/lib/graphql/fetchAttestations";
import { fetchFarcaster } from "@/lib/graphql/fetchFarcaster";
import {
  fetchGitcoinAttestation,
  parseGitcoinAttestation,
} from "@/lib/graphql/fetchGitcoin";
import { fetchPoap } from "@/lib/graphql/fetchPoap";

import { procedure, router } from "../trpc";
import { linearNormalize, truncateAddress } from "../utils/utils";

export const db = drizzle(sql, { schema });

export const TIMING = 24 * 30; // 30 days

export function getUpdateThreshold(hours: number): Date {
  const now = new Date();
  return new Date(now.getTime() - hours * 60 * 60 * 1000);
}

async function selectReviewersToUpdate(
  db: VercelPgDatabase<typeof schema>,
  table: PgTableWithColumns<any>,
  lastUpdatedField: SQLWrapper,
  threshold: Date
) {
  return await db
    .select()
    .from(table)
    .where(or(isNull(lastUpdatedField), lt(lastUpdatedField, threshold)));
}

export const reviewersRouter = router({
  getReviewers: procedure.query(async () => {
    const result = await db.select().from(schema.ReviewersTable);

    return result;
  }),
  getEnsName: procedure
    .input(
      z.object({
        address: z.string(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;

      const result = await db
        .selectDistinct({
          ensName: schema.ReviewersTable.ensName,
          creator: schema.ReviewersTable.creator,
        })
        .from(schema.ReviewersTable)
        .where(eq(schema.ReviewersTable.creator, input.address))
        .limit(1);

      const ensName = result[0]?.ensName;

      if (ensName) {
        return ensName;
      } else return truncateAddress(result[0]?.creator);
    }),
  getSocialProfiles: procedure
    .input(z.object({ address: z.string() }))
    .query(async (opts) => {
      const { input } = opts;
      const result = await db
        .select({
          farcasterProfile: schema.ReviewersTable.farcasterProfileHandle,
          poapCollected: schema.ReviewersTable.poapCollected,
          walletBalance: schema.ReviewersTable.walletBalance,
        })
        .from(schema.ReviewersTable)
        .where(eq(schema.ReviewersTable.creator, input.address))
        .limit(1);

      if (result.length === 0) {
        return null;
      }

      const profiles = result[0];

      return {
        farcaster: profiles.farcasterProfile
          ? `https://warpcast.com/${profiles.farcasterProfile}`
          : null,
        poap:
          profiles.poapCollected && profiles.poapCollected > 0
            ? `https://collectors.poap.xyz/scan/${input.address}`
            : null,
        debank: profiles.walletBalance
          ? `https://debank.com/profile/${input.address}`
          : null,
      };
    }),
  getTrustScore: procedure
    .input(
      z.object({
        address: z.string(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;

      const result = await db
        .selectDistinct({
          trustScore: schema.ReviewersTable.trustScore,
        })
        .from(schema.ReviewersTable)
        .where(eq(schema.ReviewersTable.creator, input.address))
        .limit(1);

      const trustScore = result[0]?.trustScore;

      if (trustScore) {
        return Number(trustScore);
      }
    }),
  updateEns: procedure.mutation(async (opts) => {
    const now = new Date();
    const threshold = getUpdateThreshold(TIMING);

    const reviewersToUpdate = await selectReviewersToUpdate(
      db,
      schema.ReviewersTable,
      schema.ReviewersTable.ensNameLastUpdated,
      threshold
    );

    for (const reviewer of reviewersToUpdate) {
      const publicClient = createPublicClient({
        chain: mainnet,
        transport: http(),
      });

      const ensName = await publicClient.getEnsName({
        address: reviewer.creator as `0x${string}`,
      });

      await db.transaction(async (trx) => {
        await trx
          .update(schema.ReviewersTable)
          .set({
            ensName: ensName || null,
            ensNameLastUpdated: now,
            lastModificationDate: now,
          })
          .where(eq(schema.ReviewersTable.creator, reviewer.creator));
      });
    }

    return true;
  }),
  updateGitcoinPassportScore: procedure.mutation(async (opts) => {
    const now = new Date();
    const threshold = getUpdateThreshold(TIMING);

    const reviewersToUpdate = await selectReviewersToUpdate(
      db,
      schema.ReviewersTable,
      schema.ReviewersTable.gitcoinPassportLastUpdated,
      threshold
    );

    for (const reviewer of reviewersToUpdate) {
      const attestation = await fetchGitcoinAttestation(
        reviewer.creator as string
      );

      const passport = parseGitcoinAttestation(attestation);

      const score = passport?.[0] ? passport?.[0]?.score : null;

      const gitcoinPassportScore = score
        ? (Number(score) / 10 ** 18).toString()
        : null;

      await db.transaction(async (trx) => {
        await trx
          .update(schema.ReviewersTable)
          .set({
            gitcoinPassport: gitcoinPassportScore,
            gitcoinPassportLastUpdated: now,
            lastModificationDate: now,
          })
          .where(eq(schema.ReviewersTable.creator, reviewer.creator));
      });
    }

    return true;
  }),
  updateCoinbaseVerification: procedure.mutation(async (opts) => {
    const now = new Date();
    const threshold = getUpdateThreshold(TIMING);

    const reviewersToUpdate = await selectReviewersToUpdate(
      db,
      schema.ReviewersTable,
      schema.ReviewersTable.coinbaseVerifiedLastUpdated,
      threshold
    );

    for (const reviewer of reviewersToUpdate) {
      const attestation = await fetchCoinbaseAttestation(
        reviewer.creator as string
      );

      const coinbaseVerifiedDate =
        attestation?.schema?.attestations?.[0]?.timeCreated;

      const date = coinbaseVerifiedDate
        ? fromUnixTime(coinbaseVerifiedDate)
        : null;

      await db.transaction(async (trx) => {
        await trx
          .update(schema.ReviewersTable)
          .set({
            coinbaseVerified: date,
            coinbaseVerifiedLastUpdated: now,
            lastModificationDate: now,
          })
          .where(eq(schema.ReviewersTable.creator, reviewer.creator));
      });
    }

    return true;
  }),
  updateFarcasterData: procedure.mutation(async (opts) => {
    const now = new Date();
    const threshold = getUpdateThreshold(TIMING);

    const reviewersToUpdate = await selectReviewersToUpdate(
      db,
      schema.ReviewersTable,
      schema.ReviewersTable.farcasterDataLastUpdated,
      threshold
    );

    for (const reviewer of reviewersToUpdate) {
      const farcasterData = await fetchFarcaster(reviewer.creator);

      const farcasterInfo = farcasterData?.Socials?.Social?.[0] ?? null;

      const {
        userId: farcasterUserId = null,
        profileHandle: farcasterProfileHandle = null,
        followerCount: farcasterFollowerCount = null,
        followingCount: farcasterFollowingCount = null,
        isFarcasterPowerUser = null,
      } = farcasterInfo || {};

      await db.transaction(async (trx) => {
        await trx
          .update(schema.ReviewersTable)
          .set({
            farcasterUserId: farcasterUserId,
            farcasterProfileHandle: farcasterProfileHandle,
            farcasterFollowerCount: farcasterFollowerCount,
            farcasterFollowingCount: farcasterFollowingCount,
            isFarcasterPowerUser: isFarcasterPowerUser,
            farcasterDataLastUpdated: now,
            lastModificationDate: now,
          })
          .where(eq(schema.ReviewersTable.creator, reviewer.creator));
      });
    }

    return true;
  }),
  updatePoapData: procedure.mutation(async (opts) => {
    const now = new Date();
    const threshold = getUpdateThreshold(TIMING);

    const reviewersToUpdate = await selectReviewersToUpdate(
      db,
      schema.ReviewersTable,
      schema.ReviewersTable.poapCollectedLastUpdated,
      threshold
    );

    for (const reviewer of reviewersToUpdate) {
      const poapData = await fetchPoap(reviewer.creator);
      const poapInfo = poapData?.Wallet?.poaps ?? null;
      const poapCount = poapInfo ? poapInfo.length : 0;

      await db.transaction(async (trx) => {
        await trx
          .update(schema.ReviewersTable)
          .set({
            poapCollected: poapCount,
            poapCollectedLastUpdated: now,
            lastModificationDate: now,
          })
          .where(eq(schema.ReviewersTable.creator, reviewer.creator));
      });
    }

    return true;
  }),
  updateDebankUser: procedure.mutation(async (opts) => {
    const now = new Date();
    const threshold = getUpdateThreshold(TIMING);

    const reviewersToUpdate = await selectReviewersToUpdate(
      db,
      schema.ReviewersTable,
      schema.ReviewersTable.walletBalanceLastUpdated,
      threshold
    );

    for (const reviewer of reviewersToUpdate) {
      const walletInfo = await db
        .select()
        .from(schema.DebankTable)
        .where(eq(schema.DebankTable.id, reviewer.creator));

      let walletBalance = null;
      let debankFollowers = null;
      let debankTvf = null;

      if (walletInfo.length > 0) {
        walletBalance = walletInfo[0].usdValue;
        debankFollowers = walletInfo[0].followerCount;
        debankTvf = walletInfo[0].tvf;
      }

      await db.transaction(async (trx) => {
        await trx
          .update(schema.ReviewersTable)
          .set({
            walletBalance: walletBalance,
            debankFollowerCount: debankFollowers,
            debankTvf: debankTvf,
            walletBalanceLastUpdated: now,
            debankDataLastUpdated: now,
            lastModificationDate: now,
          })
          .where(eq(schema.ReviewersTable.creator, reviewer.creator));
      });
    }

    return true;
  }),
  updateTrustScore: procedure.mutation(async (opts) => {
    const now = new Date();
    const threshold = getUpdateThreshold(TIMING);

    const reviewersToUpdate = await selectReviewersToUpdate(
      db,
      schema.ReviewersTable,
      schema.ReviewersTable.trustScoreLastUpdated,
      threshold
    );

    for (const reviewer of reviewersToUpdate) {
      // Normalize each score
      const normalizedEnsNameScore = reviewer.ensName ? 1 : 0;
      const normalizedGitcoinPassport = linearNormalize(
        Number(reviewer.gitcoinPassport),
        15,
        100
      );
      const normalizedCoinbaseVerification = reviewer.coinbaseVerified ? 1 : 0;
      const normalizedWalletBalance = linearNormalize(
        Number(reviewer.walletBalance),
        1000,
        100000
      );
      const normalizedDebankFollowerCount = linearNormalize(
        Number(reviewer.debankFollowerCount),
        100,
        10000
      );
      const normalizedDebankTvf = linearNormalize(
        Number(reviewer.debankTvf),
        1000,
        100000
      );
      const normalizedPoapCount = linearNormalize(
        Number(reviewer.poapCollected),
        1,
        50
      );
      const normalizedFarcasterUserId = linearNormalize(
        Number(reviewer.farcasterUserId),
        1,
        100000
      );
      const normalizedFarcasterFollowerCount = linearNormalize(
        Number(reviewer.farcasterFollowerCount),
        100,
        10000
      );
      const normalizedFarcasterPowerUser = reviewer.isFarcasterPowerUser
        ? 1
        : 0;

      // Calculate trust score
      const trustScore =
        0.1 * normalizedEnsNameScore +
        0.15 * normalizedGitcoinPassport +
        0.15 * normalizedCoinbaseVerification +
        0.15 * normalizedWalletBalance +
        0.05 * normalizedDebankFollowerCount +
        0.05 * normalizedDebankTvf +
        0.1 * normalizedPoapCount +
        0.05 * normalizedFarcasterUserId +
        0.1 * normalizedFarcasterFollowerCount +
        0.1 * normalizedFarcasterPowerUser;

      // Update the review's trust score in the database
      await db.transaction(async (trx) => {
        await trx
          .update(schema.ReviewersTable)
          .set({
            trustScore: trustScore.toFixed(2),
            trustScoreLastUpdated: now,
            lastModificationDate: now,
          })
          .where(eq(schema.ReviewersTable.creator, reviewer.creator));
      });
    }

    return true;
  }),
});

export type ReviewersRouter = typeof reviewersRouter;

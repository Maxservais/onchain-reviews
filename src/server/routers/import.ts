import "@/db/envConfig";

import slugify from "@sindresorhus/slugify";
import { sql } from "@vercel/postgres";
import { fromUnixTime, getUnixTime } from "date-fns";
import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { readFileSync } from "fs";

import * as schema from "@/db/schema";
import fetchAllReviews from "@/lib/graphql/fetchReviews";

import { procedure, router } from "../trpc";
import { getLastProcessedTime } from "../utils/utils";

export const db = drizzle(sql, { schema });
const BATCH_SIZE = 1000;

export const importRouter = router({
  processReviews: procedure.mutation(async (opts) => {
    const now = new Date();
    const lastProcessedTime = await getLastProcessedTime();

    const reviews = await fetchAllReviews(getUnixTime(lastProcessedTime));

    await db.transaction(async (trx) => {
      if (reviews && reviews.length > 0) {
        await trx
          .insert(schema.ReviewersTable)
          .values(
            reviews.map((review) => ({
              creator: review.attester.toLocaleLowerCase(),
              ensName: null,
              createdAt: now,
            }))
          )
          .onConflictDoNothing();
        await trx
          .insert(schema.AppsTable)
          .values(
            reviews.map((review) => ({
              slug: slugify(review.appName),
              name: review.appName,
              createdAt: now,
            }))
          )
          .onConflictDoNothing();
        await trx
          .insert(schema.ReviewsTable)
          .values(
            reviews.map((review) => ({
              easId: review.id,
              slug: slugify(review.appName),
              score: review.score,
              review: review.appReview,
              reviewDate: fromUnixTime(review.timeCreated),
              creator: review.attester.toLocaleLowerCase(),
              txId: review.txId,
              revoked: review.revoked,
              chain: review.chain as schema.Chain,
            }))
          )
          .onConflictDoNothing();
      }

      // Update the last processed time
      await trx
        .update(schema.ProcessingTable)
        .set({ lastProcessedTime: now })
        .where(eq(schema.ProcessingTable.id, 1))
        .execute();

      return true;
    });
  }),
  importApps: procedure.mutation(async () => {
    try {
      const data = JSON.parse(
        readFileSync("/Users/maxime/Downloads/apps.json", "utf8")
      );

      for (const app of data) {
        await db.transaction(async (trx) => {
          await trx
            .insert(schema.AppsTable)
            .values({
              slug: slugify(app.name),
              name: app.name,
              description: app.description,
              website: app.website,
              twitter: app.twitter,
              logoUrl: app.logoUrl,
              lastModificationDate: new Date(),
              creationDate: new Date(),
            })
            .onConflictDoUpdate({
              target: schema.AppsTable.slug,
              set: {
                description: app.description,
                website: app.website,
                twitter: app.twitter,
                logoUrl: app.logoUrl,
                lastModificationDate: new Date(),
              },
            });
        });
      }

      console.log("Data imported successfully");
      return true;
    } catch (error) {
      console.error("Error importing data:", error);
      return false;
    }
  }),
  importDebank: procedure.mutation(async (opts) => {
    try {
      const data = JSON.parse(
        readFileSync("/Users/maxime/Downloads/2024-04-29_bis.json", "utf8")
      );

      // Split data into chunks for batch processing
      const chunks = [];
      for (let i = 0; i < data.length; i += BATCH_SIZE) {
        chunks.push(data.slice(i, i + BATCH_SIZE));
      }

      for (const chunk of chunks) {
        await db.transaction(async (trx) => {
          await trx
            .insert(schema.DebankTable)
            .values(
              chunk.map((wallet: any) => ({
                id: wallet.id,
                usdValue: wallet.usd_value,
                followerCount: wallet.follower_count,
                tvf: wallet.tvf,
                lastModificationDate: new Date(),
                creationDate: new Date(),
              }))
            )
            .onConflictDoNothing();
        });
      }

      console.log("Data imported successfully");
      return true;
    } catch (error) {
      console.error("Error importing data:", error);
      return false;
    }
  }),
});

export type ImportRouter = typeof importRouter;

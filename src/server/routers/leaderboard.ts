import "@/db/envConfig";

import { sql } from "@vercel/postgres";
import { count,desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";

import * as schema from "@/db/schema";

import { procedure, router } from "../trpc";

export const db = drizzle(sql, { schema });

export const leaderboardRouter = router({
  getLeaderboardData: procedure.query(async () => {
    const result = await db
      .select({
        creator: schema.ReviewersTable.creator,
        ensName: schema.ReviewersTable.ensName,
        trustScore: schema.ReviewersTable.trustScore,
        farcasterProfileHandle: schema.ReviewersTable.farcasterProfileHandle,
        farcasterFollowerCount: schema.ReviewersTable.farcasterFollowerCount,
        reviewCount: count(schema.ReviewsTable.id),
      })
      .from(schema.ReviewersTable)
      .leftJoin(
        schema.ReviewsTable,
        eq(schema.ReviewersTable.creator, schema.ReviewsTable.creator)
      )
      .groupBy(schema.ReviewersTable.creator)
      .orderBy((fields) => [desc(fields.reviewCount)])
      .limit(50);

    return result;
  }),
});

export type LeaderboardRouter = typeof leaderboardRouter;

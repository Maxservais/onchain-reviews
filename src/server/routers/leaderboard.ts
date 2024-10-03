import "@/db/envConfig";

import { sql as sqlDrizzle } from "@vercel/postgres";
import { and, desc, eq, gte, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { z } from "zod";

import * as schema from "@/db/schema";

import { procedure, router } from "../trpc";

export const db = drizzle(sqlDrizzle, { schema });

export const leaderboardRouter = router({
  getLeaderboardData: procedure
    .input(
      z.object({
        timeFrame: z.enum(["week", "month", "all"]).default("all"),
      })
    )
    .query(async ({ input }) => {
      const { timeFrame } = input;

      let dateFilter = sql`1=1`; // Default to no date filter (all time)

      if (timeFrame === "week") {
        dateFilter = gte(
          schema.ReviewsTable.reviewDate,
          sql`DATE_TRUNC('week', CURRENT_DATE)`
        );
      } else if (timeFrame === "month") {
        dateFilter = gte(
          schema.ReviewsTable.reviewDate,
          sql`DATE_TRUNC('month', CURRENT_DATE)`
        );
      }

      const result = await db
        .select({
          creator: schema.ReviewersTable.creator,
          ensName: schema.ReviewersTable.ensName,
          trustScore: schema.ReviewersTable.trustScore,
          farcasterProfileHandle: schema.ReviewersTable.farcasterProfileHandle,
          farcasterFollowerCount: schema.ReviewersTable.farcasterFollowerCount,
          reviewCount:
            sql<number>`COUNT(DISTINCT ${schema.ReviewsTable.slug})`.as(
              "reviewCount"
            ),
        })
        .from(schema.ReviewersTable)
        .leftJoin(
          schema.ReviewsTable,
          and(
            eq(schema.ReviewersTable.creator, schema.ReviewsTable.creator),
            dateFilter,
            eq(schema.ReviewsTable.isSpam, false)
          )
        )
        .where(eq(schema.ReviewersTable.isLikelySpammer, false))
        .groupBy(schema.ReviewersTable.creator)
        .orderBy((fields) => [desc(fields.reviewCount)])
        .limit(100);

      return result;
    }),
});

export type LeaderboardRouter = typeof leaderboardRouter;

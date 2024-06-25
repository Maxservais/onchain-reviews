import "@/db/envConfig";

import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { z } from "zod";

import * as schema from "@/db/schema";

import { procedure, router } from "../trpc";
import { calculateReviewStats } from "@/lib/parseReviews";

export const db = drizzle(sql, { schema });

export const reviewsRouter = router({
  getReviews: procedure.query(async () => {
    const result = await db.select().from(schema.ReviewsTable);

    return result;
  }),
  getAppReviews: procedure
    .input(
      z.object({
        appSlug: z.string(),
        score: z.number().min(1).max(5).optional(),
        recency: z.enum(["mostRecent", "leastRecent"]).nullish(),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullable().optional(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;
      const limit = input.limit ?? 5;
      const orderDirection = input.recency === "leastRecent" ? "asc" : "desc";
      const { cursor, appSlug, score } = input;

      const items = await db.query.ReviewsTable.findMany({
        where: (reviews, { gt, lt, eq, and }) => {
          const conditions = [eq(reviews.slug, appSlug)];

          if (score !== undefined) {
            conditions.push(eq(reviews.score, score));
          }

          if (cursor !== undefined && cursor !== null) {
            const cursorCondition =
              orderDirection === "asc"
                ? gt(reviews.reviewDate, new Date(cursor))
                : lt(reviews.reviewDate, new Date(cursor));
            conditions.push(cursorCondition);
          }

          return and(...conditions);
        },
        orderBy: (reviews, { asc, desc }) => [
          orderDirection === "asc"
            ? asc(reviews.reviewDate)
            : desc(reviews.reviewDate),
        ],
        limit: limit + 1, // Fetch one extra item to check if there's a next page
      });

      const hasNextPage = items.length > limit;
      if (hasNextPage) {
        items.pop(); // Remove the extra item used for the next page check
      }

      return {
        items: items,
        nextCursor: hasNextPage
          ? items[items.length - 1].reviewDate.toISOString()
          : null,
      };
    }),
  getReviewStats: procedure
    .input(
      z.object({
        appSlug: z.string(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;

      const reviews = await db.query.ReviewsTable.findMany({
        where: (reviews) => eq(reviews.slug, input.appSlug),
        orderBy: (reviews, { asc }) => asc(reviews.id),
      });

      const stats = calculateReviewStats(reviews);

      return stats;
    }),
});

export type ReviewsRouter = typeof reviewsRouter;

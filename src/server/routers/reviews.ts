import "@/db/envConfig";

import { sql } from "@vercel/postgres";
import { desc, eq, gt, lt } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { z } from "zod";

import * as schema from "@/db/schema";
import { calculateReviewStats } from "@/lib/parseReviews";

import { procedure, router } from "../trpc";

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
        where: (reviews, { eq, and, exists, not }) => {
          const conditions = [
            eq(reviews.slug, appSlug),
            not(
              exists(
                db
                  .select()
                  .from(schema.ReviewsTable)
                  .where(
                    and(
                      eq(schema.ReviewsTable.slug, appSlug),
                      eq(schema.ReviewsTable.creator, reviews.creator),
                      gt(schema.ReviewsTable.reviewDate, reviews.reviewDate)
                    )
                  )
                  .limit(1)
              )
            ), // Subquery checks that there are no reviews for the same app and creator with a later date, effectively selecting only the latest review
          ];

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

      const reviews = await db
        .selectDistinctOn([schema.ReviewsTable.creator])
        .from(schema.ReviewsTable)
        .where(eq(schema.ReviewsTable.slug, input.appSlug))
        .orderBy(
          schema.ReviewsTable.creator,
          desc(schema.ReviewsTable.reviewDate)
        )
        .execute();

      const stats = calculateReviewStats(reviews);

      return stats;
    }),
  getReviewerReviews: procedure
    .input(
      z.object({
        address: z.string(),
      })
    )
    .query(async ({ input }) => {
      const reviews = await db
        .selectDistinctOn([schema.ReviewsTable.slug], {
          easId: schema.ReviewsTable.easId,
          slug: schema.ReviewsTable.slug,
          appName: schema.AppsTable.name,
          score: schema.ReviewsTable.score,
          review: schema.ReviewsTable.review,
          reviewDate: schema.ReviewsTable.reviewDate,
        })
        .from(schema.ReviewsTable)
        .innerJoin(
          schema.AppsTable,
          eq(schema.ReviewsTable.slug, schema.AppsTable.slug)
        )
        .where(eq(schema.ReviewsTable.creator, input.address))
        .orderBy(
          schema.ReviewsTable.slug,
          desc(schema.ReviewsTable.reviewDate)
        );

      return reviews;
    }),
});

export type ReviewsRouter = typeof reviewsRouter;

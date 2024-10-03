import "@/db/envConfig";

import { sql } from "@vercel/postgres";
import { and, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { z } from "zod";

import * as schema from "@/db/schema";

import { procedure, router } from "../trpc";

export const db = drizzle(sql, { schema });

export const appsRouter = router({
  getApps: procedure
    .input(
      z
        .object({
          sortBy: z
            .enum(["alphabetical", "reviewCount", "averageScore"])
            .default("alphabetical"),
          order: z.enum(["asc", "desc"]).default("asc"),
        })
        .optional()
    )
    .query(async (opts) => {
      const { input } = opts ?? {};
      const sortBy = input?.sortBy ?? "alphabetical";
      const order = input?.order ?? "asc";

      return db.query.AppsTable.findMany({
        orderBy: (fields, { asc, desc }) => {
          switch (sortBy) {
            case "alphabetical":
              return order === "asc" ? asc(fields.slug) : desc(fields.slug);
            case "reviewCount":
              return order === "asc"
                ? asc(fields.reviewCount)
                : desc(fields.reviewCount);
            case "averageScore":
              return order === "asc"
                ? asc(fields.averageScore)
                : desc(fields.averageScore);
            default:
              return asc(fields.slug);
          }
        },
      });
    }),
  getApp: procedure
    .input(
      z.object({
        appSlug: z.string(),
      })
    )
    .query(async (opts) => {
      const { appSlug } = opts.input;

      const app = await db.query.AppsTable.findFirst({
        where: (apps, { eq }) => eq(apps.slug, appSlug),
      });

      if (app) {
        return app;
      } else {
        return null;
      }
    }),
  updateAppStats: procedure
    .input(
      z.object({
        appSlug: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;

      // First, get all reviews for the app
      const reviews = await db
        .selectDistinctOn([schema.ReviewsTable.creator])
        .from(schema.ReviewsTable)
        .where(
          and(
            eq(schema.ReviewsTable.slug, input.appSlug),
            eq(schema.ReviewsTable.isSpam, false) // Exclude spam reviews
          )
        )
        .orderBy(
          schema.ReviewsTable.creator,
          desc(schema.ReviewsTable.reviewDate)
        )
        .execute();

      // Calculate stats
      const reviewCount = reviews.length;
      const averageScore =
        reviews.length > 0
          ? reviews.reduce((sum, review) => sum + review.score, 0) /
            reviews.length
          : 0;

      // Update the AppsTable with the new stats
      await db
        .update(schema.AppsTable)
        .set({
          reviewCount,
          averageScore: averageScore.toFixed(2),
          lastModificationDate: new Date(),
        })
        .where(eq(schema.AppsTable.slug, input.appSlug));

      return { reviewCount, averageScore };
    }),
  updateAllAppsStats: procedure.mutation(async () => {
    const apps = await db.query.AppsTable.findMany();

    const results = await Promise.all(
      apps.map(async (app) => {
        // Get all reviews for the current app
        const reviews = await db
          .selectDistinctOn([schema.ReviewsTable.creator])
          .from(schema.ReviewsTable)
          .where(
            and(
              eq(schema.ReviewsTable.slug, app.slug),
              eq(schema.ReviewsTable.isSpam, false) // Exclude spam reviews
            )
          )
          .orderBy(
            schema.ReviewsTable.creator,
            desc(schema.ReviewsTable.reviewDate)
          )
          .execute();

        // Calculate stats
        const reviewCount = reviews.length;
        const averageScore =
          reviews.length > 0
            ? reviews.reduce((sum, review) => sum + review.score, 0) /
              reviews.length
            : 0;

        // Update the AppsTable with the new stats
        await db
          .update(schema.AppsTable)
          .set({
            reviewCount,
            averageScore: averageScore.toString(),
            lastModificationDate: new Date(),
          })
          .where(eq(schema.AppsTable.slug, app.slug));

        return {
          slug: app.slug,
          reviewCount,
          averageScore,
        };
      })
    );

    return results;
  }),
});

export type AppsRouter = typeof appsRouter;

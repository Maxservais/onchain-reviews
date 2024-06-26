import "@/db/envConfig";

import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { z } from "zod";

import * as schema from "@/db/schema";

import { procedure, router } from "../trpc";

export const db = drizzle(sql, { schema });

export const appsRouter = router({
  getApps: procedure.query(async () => {
    const result = await db.select().from(schema.AppsTable);

    return result;
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
});

export type AppsRouter = typeof appsRouter;

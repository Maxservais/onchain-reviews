import "@/db/envConfig";

import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

import * as schema from "@/db/schema";

import { appsRouter } from "./routers/apps";
import { importRouter } from "./routers/import";
import { leaderboardRouter } from "./routers/leaderboard";
import { reviewersRouter } from "./routers/reviewers";
import { reviewsRouter } from "./routers/reviews";
import { signRouter } from "./routers/sign";
import { router } from "./trpc";

export const db = drizzle(sql, { schema });

export const appRouter = router({
  reviewsRouter,
  reviewersRouter,
  importRouter,
  signRouter,
  appsRouter,
  leaderboardRouter,
});

export type AppRouter = typeof appRouter;

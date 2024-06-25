import { initTRPC } from "@trpc/server";
import superjson from "superjson";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  transformer: superjson,
});

/**
 * Unprotected procedure
 */
export const procedure = t.procedure;

// Base router
export const router = t.router;

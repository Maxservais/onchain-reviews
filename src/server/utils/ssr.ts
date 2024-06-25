import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";

import { appRouter } from "..";
import { createContext } from "../context";

/**
 * SSR/RSC caller
 * @description use this function to create a TRPC server-side caller
 * @see https://trpc.io/docs/server/server-side-calls#create-caller
 */
export const createSSRCaller = async () => {
  return appRouter.createCaller(await createContext());
};

/**
 * Server-Side Helper
 * @description use this function to call tRPC procedures server-side and hydrate `react-query`'s cache
 * @see https://trpc.io/docs/client/nextjs/server-side-helpers#1-internal-router
 */
export const createSSRHelper = async () =>
  createServerSideHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });

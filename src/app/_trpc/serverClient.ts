import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";

import { appRouter } from "@/server/index";
import { getBaseUrl } from "@/lib/utils";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson,
    }),
  ],
});

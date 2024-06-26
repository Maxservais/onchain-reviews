import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";

import { getBaseUrl } from "@/lib/utils";
import { appRouter } from "@/server/index";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson,
    }),
  ],
});

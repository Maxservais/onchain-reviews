import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";

import { AppRouter } from "@/server/index";
import { getBaseUrl } from "@/lib/utils";

export const trpc = createTRPCReact<AppRouter>({});

export const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson,
      async headers() {
        return {
          // authorization: getAuthCookie(),
        };
      },
    }),
  ],
});

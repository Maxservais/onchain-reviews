import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";

import { getBaseUrl } from "@/lib/utils";
import { AppRouter } from "@/server/index";

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

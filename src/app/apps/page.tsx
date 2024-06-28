import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { createSSRHelper } from "@/server/utils/ssr";

import AllApps from "./AllApps";

export default async function Page() {
  const helper = await createSSRHelper();

  await helper.appsRouter.getApps.prefetch({
    sortBy: "alphabetical",
    order: "asc",
  });

  return (
    <HydrationBoundary state={dehydrate(helper.queryClient)}>
      <AllApps />
    </HydrationBoundary>
  );
}

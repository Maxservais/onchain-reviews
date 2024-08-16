import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { createSSRHelper } from "@/server/utils/ssr";

import Leaderboard from "./Leaderboard";

export default async function Page() {
  const helper = await createSSRHelper();

  await helper.leaderboardRouter.getLeaderboardData.prefetch({
    timeFrame: "all",
  });

  return (
    <HydrationBoundary state={dehydrate(helper.queryClient)}>
      <Leaderboard />
    </HydrationBoundary>
  );
}

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { createSSRHelper } from "@/server/utils/ssr";

import Reviewer from "./Reviewer";

export default async function Page({
  params,
}: {
  params: { address: string };
}) {
  const address = params.address;
  const helper = await createSSRHelper();

  await helper.reviewersRouter.getReviewerInfo.prefetch({ address });
  await helper.reviewsRouter.getReviewerReviews.prefetch({ address });

  return (
    <HydrationBoundary state={dehydrate(helper.queryClient)}>
      <Reviewer address={address} />
    </HydrationBoundary>
  );
}

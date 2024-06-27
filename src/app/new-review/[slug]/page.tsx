import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { createSSRHelper } from "@/server/utils/ssr";

import NewReview from "./NewReview";

export default async function Page({ params }: { params: { slug: string } }) {
  const helper = await createSSRHelper();

  await helper.appsRouter.getApp.prefetch({
    appSlug: params.slug,
  });

  return (
    <HydrationBoundary state={dehydrate(helper.queryClient)}>
      <NewReview slug={params.slug} />
    </HydrationBoundary>
  );
}

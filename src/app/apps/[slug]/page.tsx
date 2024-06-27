import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchMetadata } from "frames.js/next";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { client } from "@/app/_trpc/client";
import { absoluteUrl } from "@/lib/utils";
import { createSSRHelper } from "@/server/utils/ssr";

import AppPage from "./AppPage";

export default async function Page({ params }: { params: { slug: string } }) {
  const helper = await createSSRHelper();

  await helper.appsRouter.getApp.prefetch({
    appSlug: params.slug,
  });

  return (
    <HydrationBoundary state={dehydrate(helper.queryClient)}>
      <AppPage slug={params.slug} />
    </HydrationBoundary>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const app = await client.appsRouter.getApp.query({ appSlug: params.slug });

  if (!app || !app?.slug) {
    notFound();
  }

  return {
    title: `${app?.name} information, reviews, and more`,
    description: `${app?.description}`,
    alternates: {
      canonical: absoluteUrl(`apps/${params.slug}`),
    },
    openGraph: {
      title: `${app?.name} information, reviews, and more`,
      description: `${app?.description}`,
      type: "website",
      locale: "en_US",
      url: absoluteUrl(`apps/${params.slug}`),
    },
    twitter: {
      card: "summary_large_image",
      title: `${app?.name} information, reviews, and more`,
      description: `${app?.description}`,
    },
    other: {
      ...(await fetchMetadata(
        // provide full URL to your /frames endpoint
        new URL(
          `/apps/${params.slug}/frames`,
          process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
        )
      )),
    },
  };
}

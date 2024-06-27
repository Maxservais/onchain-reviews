"use client";

import delve from "dlv";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { RxExternalLink, RxGlobe } from "react-icons/rx";

import { trpc } from "@/app/_trpc/client";

type AppProps = {
  app: {
    slug: string;
    name: string;
    description: string | null;
    website: string | null;
    twitter: string | null;
    logoUrl: string | null;
  };
};

export function AppGrid({ app }: AppProps) {
  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md hover:shadow-zinc-900/5">
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.50)),var(--quick-links-hover-bg,theme(colors.red.50)))_padding-box,linear-gradient(to_top,theme(colors.red.400),theme(colors.red.500),theme(colors.red.600))_border-box] group-hover:opacity-100" />
      <Link
        key={delve(app, "slug")}
        href={`/apps/${delve(app, "slug")}`}
        className="flex-grow flex flex-col justify-between"
      >
        <div className="relative px-6 pt-6">
          <div className="flex items-center">
            {app?.logoUrl && (
              <img
                className="flex-shrink-0 w-16 h-auto mr-5 rounded-2xl"
                src={delve(app, "logoUrl")}
                alt={"App image"}
                height={128}
                width={128}
              />
            )}
            <div className="mr-auto">
              <h3 className="text-xl mb-2 font-semibold text-gray-900">
                {delve(app, "name")}
              </h3>
            </div>
            <RxExternalLink
              className="absolute top-6 right-6 h-4 w-4 text-red-400 hover:text-red-600"
              title="View Page"
            />
          </div>
          {app?.description && (
            <div className="text-base line-clamp-3 pt-4 leading-relaxed text-gray-600">
              <p>{delve(app, "description")}</p>
            </div>
          )}
        </div>
      </Link>
      <div className="flex justify-between items-center px-6 py-4 z-10">
        <Link
          href={`/new-review/${delve(app, "slug")}`}
          className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Review
        </Link>
        <div className="flex w-full items-center space-x-0.5 sm:space-x-1.5 justify-end">
          {app?.twitter && (
            <Link
              href={delve(app, "twitter")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <FaXTwitter className="h-5 w-5 text-gray-400 hover:text-red-300" />
            </Link>
          )}
          {app?.website && (
            <Link
              href={delve(app, "website")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <RxGlobe className="h-5 w-5 text-gray-400 hover:text-red-300" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Apps({
  max,
  displayLink = false,
}: {
  max?: number;
  displayLink?: boolean;
}) {
  const { data: apps } = trpc.appsRouter.getApps.useQuery();

  const displayedApps = max ? apps?.slice(0, max) : apps;

  return (
    <div
      id="apps"
      className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-4">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 pb-2">
            Some popular Apps
          </h2>
          <p className="text-base text-gray-700 pb-2 sm:pb-0">
            A collection of some popular apps you can leave a review for - 100%
            onchain.
          </p>
        </div>
        {displayLink && (
          <Link
            href="/apps"
            className="whitespace-nowrap text-sm font-medium text-red-600 hover:text-red-500"
          >
            View all Apps
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-6 ">
        {displayedApps?.map((app) => (
          <AppGrid key={app.slug} app={app} />
        ))}
      </div>
    </div>
  );
}

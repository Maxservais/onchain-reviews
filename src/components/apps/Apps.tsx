"use client";

import Link from "next/link";
import { useState } from "react";

import { trpc } from "@/app/_trpc/client";

import AppGrid from "./AppGrid";
import SortDropdown, { GetAppsInput } from "./Sort";

export default function Apps({
  max,
  displayLink = false,
}: {
  max?: number;
  displayLink?: boolean;
}) {
  const [sortParams, setSortParams] = useState<GetAppsInput>({
    sortBy: "alphabetical",
    order: "asc",
  });
  const { data: apps } = trpc.appsRouter.getApps.useQuery(sortParams);
  const displayedApps = max ? apps?.slice(0, max) : apps;

  const handleSortChange = (newSortParams: GetAppsInput) => {
    setSortParams(newSortParams);
  };

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
        {!displayLink && (
          <SortDropdown
            onSortChange={handleSortChange}
            currentSort={sortParams}
          />
        )}
        {displayLink && (
          <Link
            href="/"
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

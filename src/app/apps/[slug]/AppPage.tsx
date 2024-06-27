"use client";

import Link from "next/link";

import { trpc } from "@/app/_trpc/client";
import Reviews from "@/components/reviews/Reviews";

export default function AppPage({ slug }: { slug: string }) {
  const { data: app } = trpc.appsRouter.getApp.useQuery({
    appSlug: slug,
  });

  if (!app) {
    return <h1>App not found</h1>;
  }

  return (
    <div className="max-w-8xl mx-auto h-full">
      <div className="md:flex items-center py-8 sm:py-18">
        {app?.logoUrl && (
          <div className="flex justify-start md:flex-shrink-0 p-4 sm:p-6">
            <img
              className="flex-shrink-0 rounded-2xl h-24 w-24 sm:h-36 sm:w-36 md:h-48 md:w-48"
              src={app?.logoUrl}
              alt={app?.name + " logo"}
              width={64}
              height={64}
            />
          </div>
        )}
        <div className="p-4 sm:p-6">
          <div className="tracking-wide text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold">
            {app?.name}
          </div>
          {app?.description && (
            <p className="mt-2 text-gray-500 text-lg">{app?.description}</p>
          )}
          <div className="mt-6 flex flex-wrap gap-4">
            {app?.website && (
              <Link
                href={app?.website}
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition duration-150 ease-in-out"
              >
                Visit website
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            )}
            {app?.twitter && (
              <Link
                href={app?.twitter}
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-8xl py-8 sm:py-18 gap-6 sm:px-6 ">
        <Reviews appSlug={slug} />
      </div>
    </div>
  );
}

"use client";

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
      <div className="md:flex max-w-5xl mx-auto py-8 sm:py-18">
        <div className="flex justify-start md:flex-shrink-0 p-4">
          <img
            className="flex-shrink-0 rounded-2xl h-24 w-24 sm:h-48 sm:w-48"
            src={app?.logoUrl ? app?.logoUrl : "/logo.svg"}
            alt={app?.name + " logo"}
            width={64}
            height={64}
          />
        </div>
        <div className="p-4 sm:p-12">
          <div className="tracking-wide text-2xl sm:text-5xl text-gray-900 font-bold">
            {app?.name}
          </div>
          <p className="mt-2 text-gray-500 text-lg">{app?.description}</p>
          <div className="mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Visit website
            </a>
            <a href="#" className="ml-4 text-blue-500 hover:underline">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-3xl lg:max-w-8xl py-8 sm:py-18 gap-6 sm:px-6 ">
        <Reviews appSlug={slug} />
      </div>
    </div>
  );
}

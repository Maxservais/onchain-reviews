"use client";

import slugify from "@sindresorhus/slugify";
import Link from "next/link";
import { useState } from "react";

export default function NewReview() {
  const [selectedApp, setSelectedApp] = useState<string>();

  return (
    <div>
      <div className="col-span-full py-4">
        <p className="block text-base font-semibold leading-7 text-gray-900 dark:text-white">
          Select an App to Review
        </p>
      </div>
      <div className="mt-4 sm:mt-5 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        {selectedApp ? (
          <Link
            type="button"
            href={`/new-review/${slugify(selectedApp)}`}
            className="inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:col-start-2"
          >
            Write a Review
          </Link>
        ) : (
          <button
            disabled
            className="inline-flex w-full justify-center rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:col-start-2"
          >
            Select an App first
          </button>
        )}
        <Link
          href={"/apps"}
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
        >
          View All Apps
        </Link>
      </div>
    </div>
  );
}

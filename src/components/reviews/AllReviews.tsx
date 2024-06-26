import { Menu, Transition } from "@headlessui/react";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { StarIcon as Star } from "@heroicons/react/24/outline";
import Avatar from "boring-avatars";
import { format } from "date-fns";
import delve from "dlv";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useState } from "react";

import { trpc } from "@/app/_trpc/client";
import { optimismExplorer } from "@/config/eas";
import { classNames } from "@/lib/utils";
import debankLogo from "@/public/logos/debank.png";
import farcasterLogo from "@/public/logos/farcaster.png";
import poapLogo from "@/public/logos/poap.webp";

export function Review({
  address,
  date,
  score,
  review,
}: {
  address: `0x${string}`;
  date: Date;
  score: number;
  review: string;
}) {
  const { data: formattedAddress } = trpc.reviewersRouter.getEnsName.useQuery({
    address: address,
  });

  const { data: trustScore } = trpc.reviewersRouter.getTrustScore.useQuery({
    address: address,
  });

  const { data } = trpc.reviewersRouter.getSocialProfiles.useQuery({
    address: address,
  });

  const { farcaster, poap, debank } = data ?? {};

  return (
    <div>
      <div className="flex items-center">
        <Avatar
          size={48}
          name={Math.random().toString()}
          variant="marble"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <div className="ml-4">
          <div className="flex flex-row">
            <div className="relative group">
              <Link
                className="text-sm font-bold text-gray-900 dark:text-white"
                href={`${optimismExplorer}/address/${address}`}
                target="_blank"
              >
                {formattedAddress ? formattedAddress : address}
              </Link>
              {(farcaster || poap || debank) && (
                <div className="absolute left-5 bottom-full mb-2 p-2 bg-sky-50 rounded-md shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="flex w-24 items-center justify-center space-x-2">
                    {farcaster && (
                      <Link
                        href={farcaster}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className="h-6 w-6"
                          src={farcasterLogo}
                          alt="Farcaster logo"
                          height={24}
                          width={24}
                        />
                      </Link>
                    )}
                    {poap && (
                      <Link
                        href={poap}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className="h-6 w-5"
                          src={poapLogo}
                          alt="POAP logo"
                          height={24}
                          width={24}
                        />
                      </Link>
                    )}
                    {debank && (
                      <Link
                        href={debank}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className="h-6 w-6"
                          src={debankLogo}
                          alt="Debank logo"
                          height={24}
                          width={24}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
            {trustScore !== undefined && trustScore > 0.1 && (
              <div className="group relative w-max">
                <CheckBadgeIcon className="ml-1 h-4 w-4 flex-shring-0 text-sky-500" />
                <span className="absolute left-5 bottom-full mb-2 p-2 z-10 pointer-events-none hidden sm:group-hover:block w-max bg-sky-50 rounded-md shadow text-sm text-gray-600">
                  This reviewer has a high trust score based on his onchain
                  footprint.
                </span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            <time>{format(date, "MMMM dd, yyyy")}</time>
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                score > rating ? "text-yellow-400" : "text-gray-300",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{score} out of 5 stars</p>
      </div>
      <div
        className="mt-2 text-base font-light  italic text-gray-600 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: review }}
      />
    </div>
  );
}

const LoadMore = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}) => {
  return (
    <div className="py-8">
      <div className="text-center">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="inline-flex p-3 font-medium text-sky-600 dark:text-sky-500 transition-all duration-200 hover:text-sky-500 dark:hover:text-sky-400 focus:text-sky-900 hover:underline"
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : ""}
        </button>
      </div>
    </div>
  );
};

function ReviewSkeleton() {
  return (
    <div className="py-8">
      <div className="flex items-center">
        <Avatar
          size={48}
          name={Math.random().toString()}
          variant="marble"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <div className="ml-4 space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded w-24" />
          <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded w-16" />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames("h-5 w-5 flex-shrink-0", "text-gray-300")}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <div className="mt-2 space-y-2 text-base">
        <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded" />
        <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded w-1/2" />
      </div>
    </div>
  );
}

export enum Recency {
  NEWEST = "mostRecent",
  OLDEST = "leastRecent",
}

const sortOptions = [
  {
    name: "Newest",
    value: Recency.NEWEST,
    active: true,
  },
  {
    name: "Oldest",
    value: Recency.OLDEST,
    active: false,
  },
];

const scoreOptions = [
  {
    name: "All",
    value: undefined,
    active: true,
  },
  {
    name: "5 Stars",
    value: 5,
    active: false,
  },
  {
    name: "4 Stars",
    value: 4,
    active: false,
  },
  {
    name: "3 Stars",
    value: 3,
    active: false,
  },
  {
    name: "2 Stars",
    value: 2,
    active: false,
  },
  {
    name: "1 Stars",
    value: 1,
    active: false,
  },
];

export default function AllReviews({ slug }: { slug: string }) {
  const [sortOption, setSortOption] = useState<Recency>(Recency.NEWEST);
  const [scoreOption, setScoreOption] = useState<number | undefined>(undefined);

  const handleSorting = (optionName: Recency) => setSortOption(optionName);

  const handleScoring = (score: number | undefined) => {
    if (score !== undefined && score >= 1 && score <= 5) {
      setScoreOption(Number(score));
    } else {
      setScoreOption(undefined);
    }
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    trpc.reviewsRouter.getAppReviews.useInfiniteQuery(
      {
        appSlug: slug,
        score: scoreOption,
        recency: sortOption,
        limit: 5,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  const reviews = data?.pages.flatMap((page) => page.items) ?? [];

  if (status === "pending") {
    return (
      <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
        <div className="flex justify-end items-center w-full sm:w-auto pt-4 sm:pt-0">
          <div className="relative inline-block text-left px-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded w-16" />
          </div>
          <div className="relative inline-block text-left px-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded w-20" />
          </div>
        </div>
        <div className="flow-root">
          <h3 className="sr-only">Recent reviews</h3>
          <div className="divide-y divide-gray-200">
            <div>
              <ReviewSkeleton />
              <ReviewSkeleton />
              <ReviewSkeleton />
              <ReviewSkeleton />
              <ReviewSkeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (
    status === "success" &&
    scoreOption === undefined &&
    reviews?.length === 0
  ) {
    return (
      <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
        <div className="text-center">
          <Star className="mx-auto h-12 w-12 text-yellow-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
            There are no reviews yet!
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            Be the first and add a review.
          </p>
          <div className="mt-6">
            <Link
              href={`/new-review/${slug}`}
              type="button"
              className="inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Add new Review
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
      <div className="flex justify-end items-center w-full sm:w-auto pt-4 sm:pt-0">
        <Menu as="div" className="relative inline-block text-left px-4">
          <div>
            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-white">
              Sort
              <ChevronDownIcon
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-white dark:group-hover:text-gray-200"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {sortOptions.map((option, index) => (
                  <Menu.Item key={option.value}>
                    {({ active }) => (
                      <option
                        key={`sortOption-${index}`}
                        className={classNames(
                          sortOption === option.value
                            ? "font-medium text-gray-900 dark:text-white"
                            : "text-gray-500 dark:text-gray-300",
                          active
                            ? "bg-gray-100  dark:bg-gray-700 dark:text-white"
                            : "",
                          "block px-4 py-2 text-sm"
                        )}
                        value={option.value}
                        onClick={(e) => {
                          handleSorting(delve(e, "target.value"));
                        }}
                      >
                        {option.name}
                      </option>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left px-4">
          <div>
            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-white">
              Score
              <ChevronDownIcon
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-white dark:group-hover:text-gray-200"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {scoreOptions.map((option, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <option
                        // key={`scoreOption-${index}`}
                        className={classNames(
                          scoreOption === option.value
                            ? "font-medium text-gray-900 dark:text-white"
                            : "text-gray-500 dark:text-gray-300",
                          active
                            ? "bg-gray-100  dark:bg-gray-700 dark:text-white"
                            : "",
                          "block px-4 py-2 text-sm"
                        )}
                        value={option.value}
                        onClick={(e) => {
                          handleScoring(delve(e, "target.value"));
                        }}
                      >
                        {option.name}
                      </option>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="flow-root">
        <h3 className="sr-only">Reviews</h3>
        {reviews.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {reviews?.map((review) => (
              <div key={review?.easId} className="py-8">
                <Review
                  address={review?.creator as `0x${string}`}
                  date={review?.reviewDate}
                  score={review?.score!}
                  review={review?.review!}
                />
              </div>
            ))}
            {hasNextPage && (
              <LoadMore
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage ?? false}
                isFetchingNextPage={isFetchingNextPage}
              />
            )}
          </div>
        ) : (
          <div className="text-center">
            <Star className="mx-auto h-12 w-12 text-yellow-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
              No {scoreOption} {scoreOption! > 1 ? "Stars" : "Star"} reviews
              yet!
            </h3>
            <div className="mt-6">
              <Link
                href={`/new-review/${slug}`}
                type="button"
                className="inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                <PlusIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5"
                  aria-hidden="true"
                />
                Add new Review
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

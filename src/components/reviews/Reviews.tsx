"use client";

import Link from "next/link";

import { trpc } from "@/app/_trpc/client";

import AllReviews from "./AllReviews";
import DetailedScores, { FinalScore } from "./Scores";

export function AddReview({ slug }: { slug: string }) {
  return (
    <div className="pt-10">
      <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
      <p className="mt-1 text-sm text-gray-600">
        If you’ve used this app, share your thoughts with others.
      </p>
      <Link
        href={`/new-review/${slug}`}
        type="button"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
      >
        Write a review
      </Link>
    </div>
  );
}

export default function Reviews({ appSlug }: { appSlug: string }) {
  const reviewStats = trpc.reviewsRouter.getReviewStats.useQuery({
    appSlug: appSlug,
  });

  return (
    <section
      id="reviews"
      aria-labelledby="app-reviews-title"
      className="scroll-mt-16"
    >
      <div className="sm:rounded-lg bg-white shadow">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-8xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customer Reviews
            </h2>
            {reviewStats.data && reviewStats?.data?.totalCount > 0 ? (
              <div className="pt-4">
                <FinalScore appSlug={appSlug} />
                <DetailedScores reviewStats={reviewStats.data} />
              </div>
            ) : null}
            <AddReview slug={appSlug} />
          </div>
          <AllReviews slug={appSlug} />
        </div>
      </div>
    </section>
  );
}

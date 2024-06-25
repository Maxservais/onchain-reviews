import Link from "next/link";
import { Fragment, useState } from "react";

import { trpc } from "@/app/_trpc/client";

import AllReviews from "./AllReviews";
import DetailedScores, { FinalScore } from "./Scores";

export function AddReview({ slug }: { slug: string }) {
  return (
    <div className="pt-10">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        Share your thoughts
      </h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
        If you’ve used this app, share your thoughts with others.
      </p>
      <Link
        href={`/new-review/${slug}`}
        type="button"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 dark:border-white/10 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
      >
        Write a review
      </Link>
    </div>
  );
}

export default function Reviews({ app }: { app: any }) {
  const reviewStats = trpc.reviewsRouter.getReviewStats.useQuery({
    appSlug: app.slug,
  });

  return (
    <section
      id="reviews"
      aria-labelledby="app-reviews-title"
      className="scroll-mt-16"
    >
      <div className="sm:rounded-lg bg-white dark:bg-slate-900 shadow dark:border dark:border-white/20">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-8xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Customer Reviews
            </h2>
            {reviewStats.data && reviewStats?.data?.totalCount > 0 ? (
              <Fragment>
                <FinalScore reviewStats={reviewStats.data} />
                <DetailedScores reviewStats={reviewStats.data} />
              </Fragment>
            ) : null}
            <AddReview slug={app.slug} />
          </div>
          <AllReviews slug={app.slug} />
        </div>
      </div>
    </section>
  );
}

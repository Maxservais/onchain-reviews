import { StarIcon } from "@heroicons/react/20/solid";

import { reviewStats } from "@/lib/parseReviews";
import { classNames } from "@/lib/utils";

export function FinalScore({ reviewStats }: { reviewStats: reviewStats }) {
  return (
    <div className="mt-3 flex items-center">
      <div>
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                reviewStats.average > rating
                  ? "text-yellow-400"
                  : "text-gray-300",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
          <p className="ml-2 text-sm text-gray-900">
            {reviewStats.average}
          </p>
        </div>
        <p className="sr-only">{reviewStats.average} out of 5 stars</p>
      </div>
      <p className="ml-2 text-sm text-gray-900">
        ({reviewStats.totalCount} reviews)
      </p>
    </div>
  );
}

export default function DetailedScores({
  reviewStats,
}: {
  reviewStats: reviewStats;
}) {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Review data</h3>

      <dl className="space-y-3">
        {reviewStats?.counts.map((count) => (
          <div key={count.rating} className="flex items-center text-sm">
            <dt className="flex flex-1 items-center">
              <p className="w-3 font-medium text-gray-900">
                {count.rating}
                <span className="sr-only"> star reviews</span>
              </p>
              <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                <StarIcon
                  className={classNames(
                    count.count > 0 ? "text-yellow-400" : "text-gray-300",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />

                <div className="relative ml-3 flex-1">
                  <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                  {count.count > 0 ? (
                    <div
                      className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                      style={{
                        width: `calc(${count.count} / ${reviewStats.totalCount} * 100%)`,
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </dt>
            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
              {Math.round((count.count / reviewStats.totalCount) * 100)}%
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

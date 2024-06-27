import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

import { Status } from "@/app/new-review/[slug]/NewReview";

export function Error({
  setReviewStatus,
  error,
}: {
  setReviewStatus: Dispatch<SetStateAction<Status>>;
  error: string;
}) {
  return (
    <div>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
          <ExclamationTriangleIcon
            className="h-6 w-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="py-3 sm:py-6 text-center">
          <h3 className="text-2xl font-semibold leading-6 text-gray-900">
            Review unsuccessful
          </h3>
        </div>
        <div className="col-span-full py-4">
          <p className="block text-base font-semibold leading-7 text-gray-900">
            Sorry, it seems there was an error submitting your review.
          </p>
          <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
            {error}
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please try again and if the problem persists, reach out.
          </p>
        </div>
        <div className="col-span-full py-4">
          <p className="block text-base font-semibold leading-7 text-gray-900">
            Here are some things that could have gone wrong...
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            - Is your wallet connected to OP Mainnet?
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            - Have you made sure you have enough ETH to cover the transaction
            fees (if it&apos;s not sponsored)?
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            - Did you sign the transaction with your wallet?
          </p>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={() => setReviewStatus("rating")}
        >
          Try Reviewing again
        </button>
      </div>
    </div>
  );
}

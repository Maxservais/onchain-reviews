import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import { Status } from "@/app/new-review/[slug]/NewReview";

export function Error({
  setReviewStatus,
  error,
}: {
  setReviewStatus: (status: Status) => Promise<void>;
  error: string;
}) {
  return (
    <div className="pt-6 text-left">
      <div className="flex items-center">
        <h3 className="mr-3 text-2xl font-semibold leading-9 text-gray-900 dark:text-white">
          Review submission failed
        </h3>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
          <ExclamationTriangleIcon
            className="h-3 w-3 text-red-600"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
          We apologize, but there was an error submitting your review.
          Here&apos;s what might have gone wrong:
        </p>
        <ul className="list-disc pl-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
          <li>Your wallet might not be connected to OP Mainnet</li>
          <li>
            You may not have enough ETH to cover transaction fees (if not
            sponsored)
          </li>
          <li>The transaction might not have been signed in your wallet</li>
        </ul>
        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
          Error details: <span className="font-medium">{error}</span>
        </p>
      </div>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={() => setReviewStatus("rating")}
        >
          Try reviewing again
        </button>
      </div>
    </div>
  );
}

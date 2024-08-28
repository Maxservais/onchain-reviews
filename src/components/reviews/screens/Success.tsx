import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAccount } from "wagmi";

import {
  baseExplorer,
  opSepoliaExplorer,
  optimismExplorer,
} from "@/config/eas";

export function Success({
  newAttestationUID,
  slug,
}: {
  newAttestationUID: string;
  slug: string;
}) {
  const explorers: Record<number, string> = {
    10: optimismExplorer,
    8453: baseExplorer,
    11155420: opSepoliaExplorer,
  };

  const { chainId } = useAccount();

  const explorer = chainId && explorers[chainId] ? explorers[chainId] : null;
  return (
    <div className="pt-6 text-left">
      <div className="flex items-center">
        <h3 className="mr-3 text-2xl font-semibold leading-9 text-gray-900">
          Review successfully added
        </h3>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-3 w-3 text-green-600" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <p className="text-sm leading-6 text-gray-600">
          Thank you for sharing your thoughts. You can view your review on the{" "}
          <Link
            href={`${explorer}/attestation/view/${newAttestationUID}`}
            className="text-sm text-red-600 font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            target="_blank"
            rel="noopener"
          >
            EAS Explorer
          </Link>{" "}
          or on your{" "}
          <Link
            href="/my-reviews"
            className="text-sm text-red-600 font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Profile
          </Link>{" "}
          page.
        </p>
      </div>
      <div className="mt-4 sm:mt-5 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        <Link
          href="/new-review"
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:col-start-2"
        >
          Review another app
        </Link>
        <Link
          href={`/${slug}#reviews`}
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
        >
          View reviews
        </Link>
      </div>
    </div>
  );
}

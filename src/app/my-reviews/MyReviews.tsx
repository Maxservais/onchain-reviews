"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import Link from "next/link";
import { useAccount } from "wagmi";

import { Profile } from "@/components/reviews/Profile";

export default function MyReviews() {
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();

  if (isConnected && address) {
    return <Profile address={address.toLowerCase()} />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="bg-white dark:bg-slate-800 shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white mb-4">
              Connect Your Wallet
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400 mb-6">
              To view your reviews, please connect your wallet. This allows us
              to securely retrieve your review history.
            </p>
            <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse gap-3">
              <button
                onClick={() => open()}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:w-auto"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

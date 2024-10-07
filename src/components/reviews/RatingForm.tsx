import { StarIcon } from "@heroicons/react/20/solid";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { getAccount } from "@wagmi/core";
import Link from "next/link";
import { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Chain } from "wagmi/chains";

import { App, Status } from "@/app/new-review/[slug]/NewReview";
import connectWallet, { getNetworks } from "@/lib/wallet/connectWallet";

import { config } from "../../../wagmi.config";

export type IFormInput = {
  review: string;
  score: number;
};

export default function RatingForm({
  app,
  reviewStatus,
  walletStatus,
  onSubmit,
  openWallet,
  setReviewStatus,
  preferredChain,
}: {
  app: App;
  reviewStatus: Status;
  walletStatus: "connected" | "connecting" | "disconnected" | "reconnecting";
  onSubmit: SubmitHandler<IFormInput>;
  openWallet: () => Promise<void>;
  setReviewStatus: (status: Status) => Promise<void>;
  preferredChain: Chain;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({});

  const [hoverRating, setHoverRating] = useState(0);
  const [clickedRating, setClickedRating] = useState(0);

  const handleRating = (rating: number) => {
    setClickedRating(rating + 1);
    setValue("score", rating + 1);
  };

  const handleMouseEnter = (rating: number) => {
    setHoverRating(rating + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const { chainId } = getAccount(config);

  const networks = getNetworks();

  let isChainIdDifferent = true;
  for (const network of networks) {
    if (chainId === network.id) {
      isChainIdDifferent = false;
      break;
    }
  }

  const handleConnectWallet = async () => {
    await openWallet();
    await setReviewStatus("rating");
  };

  const handleSwitchChain = async () => {
    await connectWallet(walletStatus, openWallet, preferredChain);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="col-span-full py-4">
          <label
            htmlFor="score"
            className="block text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
            Rate your recent experience
          </label>
          <div>
            <div className="flex items-center justify-left py-2">
              <div className="flex flex-row-reverse">
                {[4, 3, 2, 1, 0].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`text-gray-300 h-8 w-8 flex-shrink-0 ${
                      hoverRating > rating || clickedRating > rating
                        ? "text-yellow-400"
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(rating)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleRating(rating)}
                    {...register("score", { required: true, min: 1, max: 5 })}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            {errors.score && (
              <div className="flex items-center mt-1">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-600 dark:text-red-500"
                  aria-hidden="true"
                />
                <p
                  className="text-sm text-red-600 dark:text-red-500 ml-1"
                  id="email-error"
                >
                  Select a score from 1 to 5.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-full pb-2">
          <label
            htmlFor="review"
            className="block text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
            Tell us more about your experience with {app?.name}
          </label>
          <div className="mt-2">
            {errors.review ? (
              <Fragment>
                <textarea
                  id="review"
                  rows={5}
                  className="block w-full rounded-md border-0 dark:bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-300 dark:ring-red-100 placeholder:text-red-600 dark:placeholder:text-red-500 focus:ring-2 focus:ring-inset focus:ring-red-500 dark:focus:ring-red-300 text-sm leading-6"
                  placeholder={`What made your experience great? What is ${app?.name} doing well? Please be honest, helpful and constructive! Consider aspects that matter to you, such as: Overall quality, Ease of use, Features, Customer support, etc.`}
                  {...register("review", {
                    required: true,
                    minLength: 10,
                    maxLength: 1000,
                  })}
                />
                <div className="flex items-center mt-2">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-600 dark:text-red-500"
                    aria-hidden="true"
                  />
                  <p
                    className="text-sm text-red-600 dark:text-red-500 ml-1"
                    id="email-error"
                  >
                    Not a valid description.
                  </p>
                </div>
              </Fragment>
            ) : (
              <textarea
                id="review"
                rows={5}
                className="block w-full rounded-md border-0 dark:bg-white/5 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 dark:focus:ring-red-500 text-sm leading-6"
                placeholder={`What made your experience great? What is ${app?.name} doing well? Please be honest, helpful and constructive! Consider aspects that matter to you, such as: Overall quality, Ease of use, Features, Customer support, etc.`}
                {...register("review", {
                  required: true,
                  minLength: 5,
                  maxLength: 1000,
                })}
              />
            )}
          </div>
        </div>
        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
          This information will be displayed publicly so be mindful about what
          you share.
        </p>
      </div>

      <div className="mt-4 sm:mt-5 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        {walletStatus !== "connected" && (
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:col-start-2"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </button>
        )}
        {walletStatus === "connected" &&
          reviewStatus === "rating" &&
          isChainIdDifferent === true && (
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:col-start-2"
              onClick={handleSwitchChain}
            >
              Switch to {preferredChain.name}
            </button>
          )}
        {walletStatus === "connected" &&
          reviewStatus === "rating" &&
          isChainIdDifferent === false && (
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:col-start-2"
            >
              Add Review
            </button>
          )}
        {walletStatus === "connected" && reviewStatus === "inProgress" && (
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:col-start-2"
            disabled
          >
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Confirm in your wallet
          </button>
        )}
        {walletStatus === "connected" && reviewStatus === "confirming" && (
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:col-start-2"
            disabled
          >
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Transaction in progress
          </button>
        )}
      </div>
    </form>
  );
}

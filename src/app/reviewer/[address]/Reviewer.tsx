"use client";

import { StarIcon as Star } from "@heroicons/react/20/solid";
import Avatar from "boring-avatars";
import { format } from "date-fns";
import { ShieldAlert, ShieldCheck, ShieldOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { trpc } from "@/app/_trpc/client";
import { truncateAddress } from "@/lib/utils";
import debankLogo from "@/public/logos/debank.png";
import farcasterLogo from "@/public/logos/farcaster.png";
import poapLogo from "@/public/logos/poap.webp";

const TrustScoreDisplay = ({ score }: { score: number | null | undefined }) => {
  if (score === null || score === undefined) return null;

  let icon;
  let text;
  let colorClass;

  if (score > 0.15) {
    icon = <ShieldCheck className="w-6 h-6" />;
    text = "High Trust";
    colorClass = "text-green-500";
  } else if (score >= 0.05) {
    icon = <ShieldAlert className="w-6 h-6" />;
    text = "Medium Trust";
    colorClass = "text-yellow-500";
  } else {
    icon = <ShieldOff className="w-6 h-6" />;
    text = "Low Trust";
    colorClass = "text-red-500";
  }

  return (
    <div className={`flex items-center ${colorClass}`}>
      {icon}
      <span className="ml-2 font-medium">{text}</span>
    </div>
  );
};

export default function Reviewer({ address }: { address: string }) {
  const { data: reviewer, isLoading: isReviewerLoading } =
    trpc.reviewersRouter.getReviewerInfo.useQuery({ address });
  const { data: reviews, isLoading: areReviewsLoading } =
    trpc.reviewsRouter.getReviewerReviews.useQuery({ address });

  if (isReviewerLoading || areReviewsLoading) {
    return <div>Loading...</div>;
  }

  if (!reviewer) {
    return <div>Reviewer not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar
                size={64}
                name={Math.random().toString()}
                variant="marble"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {reviewer.ensName || truncateAddress(address)}
                </h3>
                <div className="mt-1 flex space-x-2">
                  <Link
                    href={`https://debank.com/profile/${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={debankLogo}
                      alt="Debank"
                      width={24}
                      height={24}
                    />
                  </Link>
                  {reviewer.farcasterProfileHandle && (
                    <Link
                      href={`https://warpcast.com/${reviewer.farcasterProfileHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={farcasterLogo}
                        alt="Farcaster"
                        width={24}
                        height={24}
                      />
                    </Link>
                  )}
                  {reviewer.poapCollected ? (
                    <Link
                      href={`https://collectors.poap.xyz/scan/${address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={poapLogo} alt="POAP" width={24} height={24} />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
            <TrustScoreDisplay score={Number(reviewer.trustScore)} />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        Reviews ({reviews?.length || 0})
      </h2>
      <div className="space-y-8">
        {reviews?.map((review) => (
          <div
            key={review.easId}
            className="bg-white shadow overflow-hidden sm:rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                <Link href={`/apps/${review.slug}`} className="hover:underline">
                  {review.appName}
                </Link>
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {format(new Date(review.reviewDate), "MMMM dd, yyyy")}
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="flex items-center mb-2">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${
                      review.score > rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              {review.review && (
                <p
                  className="text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: review.review }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

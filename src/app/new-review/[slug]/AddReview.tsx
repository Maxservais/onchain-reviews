"use client";

import { useState } from "react";

import { Error } from "@/components/reviews/screens/Error";
import Rating from "@/components/reviews/screens/Rating";
import { Success } from "@/components/reviews/screens/Success";
import { FAQEntry } from "@/components/utils/FAQ";
import ConnectWallet from "@/components/wallet/ConnectWallet";

export type Status =
  | "rating"
  | "inProgress"
  | "confirming"
  | "success"
  | "error";

export default function ReviewPage({ slug }: { slug: string }) {
  const data = {
    attributes: {
      slug: "uniswap",
      name: "Uniswap",
      description:
        "Uniswap is a decentralized finance protocol that is used to exchange cryptocurrencies. It is based on the Ethereum blockchain and allows users to trade without intermediaries.",
      website: "https://uniswap.org/",
      logo: "https://uniswap.org/logo.png",
    },
  };

  return <ReviewForm app={data} />;
}

export function ReviewForm({ app }: { app: any }) {
  const [reviewStatus, setReviewStatus] = useState<Status>("rating");
  const [error, setError] = useState<string>("");
  const [newAttestationUID, setNewAttestationUID] = useState("");

  return (
    <section className="py-6 sm:px-2 xl:px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-white/20 py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="min-h-[50vh] flex flex-col justify-center">
          <ConnectWallet />
          {(reviewStatus === "rating" ||
            reviewStatus === "inProgress" ||
            reviewStatus === "confirming") && (
            <Rating
              app={app}
              reviewStatus={reviewStatus}
              setNewAttestationUID={setNewAttestationUID}
              setReviewStatus={setReviewStatus}
              setError={setError}
            />
          )}
          {reviewStatus === "success" && (
            <Success newAttestationUID={newAttestationUID} slug={app?.slug} />
          )}
          {reviewStatus === "error" && (
            <Error setReviewStatus={setReviewStatus} error={error} />
          )}
        </div>
      </div>
    </section>
  );
}

export const faqs: FAQEntry[] = [
  {
    index: 0,
    question: "Why contribute a review to Ethereum Ecosystem?",
    answer:
      "Visitors come to Ethereum Ecosystem to explore a wide range of apps and tools. By sharing your experiences, you help others make informed decisions.",
  },
  {
    index: 1,
    question: "Why do I need a wallet?",
    answer:
      "A wallet is needed to add a review to the Ethereum Ecosystem because it uses cryptography to verify your identity, ensuring authenticity and security. Additionally, it allows you to interact with the blockchain directly and securely.",
  },
  {
    index: 2,
    question: "Why should I pay to review?",
    answer:
      "We don't charge any fees. However, using the blockchain incurs minimal costs, usually just a few cents. This small fee covers the transaction cost and prevents spam, ensuring genuine contributions.",
  },
  {
    index: 3,
    question: "Why do I need to sign a transaction?",
    answer:
      "Signing a transaction with your wallet uses cryptography to verify your identity, ensuring your review is authentic.",
  },
  {
    index: 4,
    question: "How should I proceed?",
    answer:
      "Prepare your wallet and ensure you have some ETH on OP Mainnet, a Layer 2 solution. You will need to sign with your wallet, using cryptography to verify your identity. Your review will be recorded on the blockchain, making your contribution enduring and valuable to the ecosystem.",
  },
];

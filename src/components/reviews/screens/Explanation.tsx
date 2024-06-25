import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { scrollToTop } from "@/lib/utils";

import { Status } from "../../../app/new-review/[slug]/AddReview";

const features = [
  {
    name: "Assist your peers.",
    description:
      "Your feedback on Ethereum apps and tools helps build a knowledge base that benefits the entire community, making it easier for everyone to find the right solutions.",
    icon: UsersIcon,
  },
  {
    name: "Gain recognition.",
    description:
      "Thoughtful and detailed reviews can position you as a knowledgeable authority within the Ethereum space.",
    icon: CheckCircleIcon,
  },
  {
    name: "Voice your experience.",
    description:
      "Whether you’ve discovered an app that enhances your workflow or struggled with one that falls short, your insights are important. Let others know what works and what doesn’t.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export function Explanation({
  setReviewStatus,
}: {
  setReviewStatus: Dispatch<SetStateAction<Status>>;
}) {
  const handleAddReviewClick = async () => {
    setReviewStatus("rating");
    scrollToTop();
  };

  return (
    <div className="h-1/2">
      <div>
        <div className="col-span-full py-4">
          <p className="block text-base font-semibold leading-7 text-gray-900 dark:text-white">
            Your insights are invaluable.
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
            Visitors come to Ethereum Ecosystem to explore a wide range of apps
            and tools within the Ethereum ecosystem. By sharing your
            experiences, you can guide others in making informed decisions.
          </p>
        </div>
        <div className="col-span-full py-4">
          <p className="block text-base font-semibold leading-7 text-gray-900 dark:text-white">
            Why contribute a review to Ethereum Ecosystem?
          </p>
          <dl className="max-w-xl space-y-1 mt-2 text-gray-600 dark:text-gray-300 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-sm">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-sky-600 dark:text-sky-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline text-sm">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="col-span-full py-4">
          <p className="block text-base font-semibold leading-7 text-gray-900 dark:text-white">
            What&apos;s next?
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
            To proceed, prepare your wallet and ensure you have some ETH on OP
            Mainnet, a Layer 2 solution. Your review will be recorded on the
            blockchain, making your contribution both enduring and valuable to
            the ecosystem. You will need to sign with your wallet, using
            cryptography to verify your identity.
          </p>
        </div>
        <div className="col-span-full py-4">
          <p className="block text-base font-semibold leading-7 text-gray-900 dark:text-white">
            Why should I pay to review?
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
            We don&apos;t charge any fees. However, using the blockchain incurs
            some minimal costs, usually just a few cents. This small fee helps
            cover the blockchain transaction cost and prevents spam, ensuring
            that all contributions are genuine.
          </p>
        </div>
      </div>
      <div className="mt-4 sm:mt-5 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:col-start-2"
          onClick={handleAddReviewClick}
        >
          Write a Review
        </button>
        <Link
          href={"/new-review/"}
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
        >
          Review Another App
        </Link>
      </div>
    </div>
  );
}

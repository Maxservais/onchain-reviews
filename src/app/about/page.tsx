import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

import { Faq, FAQEntry } from "@/components/utils/FAQ";

import { faqs } from "./faqData";

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

export default function About() {
  return (
    <section className="py-6 sm:px-2 xl:px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white   py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="min-h-[50vh] flex flex-col justify-center">
          <div className="pt-6 text-left">
            <h3 className="text-2xl font-semibold leading-9 text-gray-900">
              About
            </h3>
          </div>
          <div className="h-1/2">
            <div className="col-span-full py-4">
              <p className="block text-base font-semibold leading-7 text-gray-900">
                Welcome to our open-source demo!
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Created by the{" "}
                <Link
                  href="https://www.ethereum-ecosystem.com/"
                  target="_blank"
                  className="font-semibold"
                >
                  Ethereum Ecosystem
                </Link>{" "}
                team, this web app is a foundation for building and sharing
                onchain reviews. It features an{" "}
                <Link
                  href="https://contribute.optimism.io/issue/attestation-based-app-rating"
                  target="_blank"
                  className="font-semibold"
                >
                  Attestation-Based Dapp Rating System
                </Link>
                , like Yelp for dApps, where users can review decentralized apps
                they&apos;ve used and see others&apos; reviews. All reviews are
                100% onchain, ensuring transparency and accessibility thanks to
                the{" "}
                <Link
                  href="https://attest.org/"
                  target="_blank"
                  className="font-semibold"
                >
                  Ethereum Attestation Service
                </Link>
                .
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                These reviews can be integrated by platforms like Optimism,
                Mode, and Base to enhance their ecosystem pages with minimal
                coding. This demo is easy to fork and customize, allowing
                developers to create their own unique onchain review app.
              </p>
            </div>
            <div className="col-span-full py-4">
              <p className="block text-base font-semibold leading-7 text-gray-900">
                Why are onchain reviews important?
              </p>
              <dl className="max-w-xl space-y-1 mt-2 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-sm">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-red-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-sm">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mx-auto max-w-4xl mt-8 p">
              <Faq faqs={faqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

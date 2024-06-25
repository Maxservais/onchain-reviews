import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

import { Faq } from "@/components/utils/FAQ";

import { faqs } from "./[slug]/AddReview";
// import NewReview from "./NewReview";

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

export default function ReviewIntro() {
  return (
    <section className="py-6 sm:px-2 xl:px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-white/20 py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="min-h-[50vh] flex flex-col justify-center">
          <div className="pt-6 text-left">
            <h3 className="text-2xl font-semibold leading-9 text-gray-900 dark:text-white">
              Review
            </h3>
          </div>
          <div className="h-1/2">
            <div className="col-span-full py-4">
              <p className="block text-base font-semibold leading-7 text-gray-900 dark:text-white">
                Your insights are invaluable.
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Visitors come to Ethereum Ecosystem to explore a wide range of
                apps and tools within the Ethereum ecosystem. By sharing your
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
            {/* <NewReview /> */}
            <div className="mx-auto max-w-4xl mt-8 p">
              <Faq faqs={faqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Dialog, Transition } from "@headlessui/react";
import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

import { Faq, FAQEntry } from "@/components/utils/FAQ";

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

interface FaqModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  faqs: FAQEntry[];
}

export default function FaqModal({ isOpen, setIsOpen, faqs }: FaqModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
                <div className="col-span-full py-4">
                  <p className="block text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    Why contribute a review to Ethereum Ecosystem?
                  </p>
                  <dl className="max-w-xl space-y-1 mt-2 text-gray-600 dark:text-gray-300 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-sm">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-red-600 dark:text-red-500"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline text-sm">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="mt-2">
                  <Faq faqs={faqs} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

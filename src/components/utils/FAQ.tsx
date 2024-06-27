"use client";

import { PlusSmallIcon } from "@heroicons/react/24/outline";

export interface FAQEntry {
  index: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQEntry[];
}

const FaqItem = ({ index, question, answer }: FAQEntry) => {
  return (
    <div key={index}>
      <input
        type="checkbox"
        id={`faq-${index}`}
        className="hidden peer" // Hidden checkbox controls the panel
      />
      <label
        htmlFor={`faq-${index}`}
        className="flex w-full items-start justify-between text-left text-gray-900 cursor-pointer"
      >
        <span className="text-base font-semibold leading-7">{question}</span>
        <span className="ml-6 h-7 flex items-center">
          <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
        </span>
      </label>
      <div className="hidden peer-checked:block  mt-2 pr-12">
        <div className="max-w-none text-sm">{answer || ""}</div>
      </div>
    </div>
  );
};

export function Faq({ faqs }: FAQProps) {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16">
      <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="faq-title" className="text-lg font-medium text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="px-4 py-6 sm:px-6">
            <dl className="space-y-6">
              {faqs.map((faqItem: FAQEntry, index: number) => (
                <FaqItem
                  key={index}
                  index={index}
                  question={faqItem.question}
                  answer={faqItem.answer}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

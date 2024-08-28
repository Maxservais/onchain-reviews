"use client";

import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import { faqs } from "@/app/new-review/faqData";
import FaqModal from "@/components/utils/FaqModal";

export default function FaqButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-4 right-4 p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors z-10"
        aria-label="Open FAQ"
      >
        <QuestionMarkCircleIcon className="w-6 h-6" />
      </button>
      <FaqModal isOpen={isOpen} setIsOpen={setIsOpen} faqs={faqs} />
    </>
  );
}

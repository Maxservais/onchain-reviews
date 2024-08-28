"use client";

import { notFound } from "next/navigation";
import { useState } from "react";

import { trpc } from "@/app/_trpc/client";
import { Error } from "@/components/reviews/screens/Error";
import Rating from "@/components/reviews/screens/Rating";
import { Success } from "@/components/reviews/screens/Success";
import { FAQEntry } from "@/components/utils/FAQ";
import FaqButton from "@/components/utils/FaqButton";

export type Status =
  | "rating"
  | "inProgress"
  | "confirming"
  | "success"
  | "error";

export type App = {
  name: string;
  description: string | null;
  slug: string;
  website: string | null;
  twitter: string | null;
  logoUrl: string | null;
  lastModificationDate: Date | null;
  creationDate: Date;
};

export default function NewReview({ slug }: { slug: string }) {
  const [reviewStatus, setReviewStatus] = useState<Status>("rating");
  const [error, setError] = useState<string>("");
  const [newAttestationUID, setNewAttestationUID] = useState("");

  const { data: app } = trpc.appsRouter.getApp.useQuery({ appSlug: slug });

  if (!app?.slug) {
    return notFound();
  }

  return (
    <section className="py-6 sm:px-2 xl:px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-end pb-10">
          <FaqButton />
        </div>
        <div className="flex flex-col justify-center">
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

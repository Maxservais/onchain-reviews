"use client";

import { notFound, useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";

import { trpc } from "@/app/_trpc/client";
import { Error } from "@/components/reviews/screens/Error";
import Progress from "@/components/reviews/screens/Progress";
import Rating from "@/components/reviews/screens/Rating";
import { Success } from "@/components/reviews/screens/Success";
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

export const getCurrentStep = (reviewStatus: Status) => {
  switch (reviewStatus) {
    case "rating":
    case "inProgress":
    case "confirming":
      return 2;
    case "success":
      return 3;
    case "error":
      return 2;
    default:
      return 1;
  }
};

export default function NewReview({ slug }: { slug: string }) {
  const { data: app } = trpc.appsRouter.getApp.useQuery({ appSlug: slug });

  if (!app?.slug) {
    return notFound();
  }

  return <ReviewForm app={app} />;
}

function ReviewForm({ app }: { app: App }) {
  const [reviewStatus, setReviewStatus] = useQueryState(
    "status",
    parseAsString.withDefault("rating" as Status)
  );
  const [error, setError] = useQueryState(
    "error",
    parseAsString.withDefault("")
  );
  const [newAttestationUID, setNewAttestationUID] = useQueryState(
    "attestationUID",
    parseAsString.withDefault("")
  );
  const router = useRouter();

  const handleStepClick = (step: number) => {
    if (step === 1) {
      router.push("/");
    } else if (step === 2) {
      setReviewStatus("rating");
    }
  };

  const handleSetReviewStatus = async (status: Status) => {
    await setReviewStatus(status);
  };

  const handleSetError = async (errorMessage: string) => {
    await setError(errorMessage);
  };

  const handleSetNewAttestationUID = async (uid: string) => {
    await setNewAttestationUID(uid);
  };

  return (
    <section className="py-6 sm:px-2 xl:px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-white/20 py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-end pb-10">
          <FaqButton />
        </div>
        <div>
          <Progress
            currentStep={getCurrentStep(reviewStatus as Status)}
            onStepClick={handleStepClick}
          />
        </div>
        <div className="flex flex-col justify-center">
          {(reviewStatus === "rating" ||
            reviewStatus === "inProgress" ||
            reviewStatus === "confirming") && (
            <Rating
              app={app}
              reviewStatus={reviewStatus as Status}
              setNewAttestationUID={handleSetNewAttestationUID}
              setReviewStatus={handleSetReviewStatus}
              setError={handleSetError}
            />
          )}
          {reviewStatus === "success" && (
            <Success newAttestationUID={newAttestationUID} slug={app?.slug} />
          )}
          {reviewStatus === "error" && (
            <Error setReviewStatus={handleSetReviewStatus} error={error} />
          )}
        </div>
      </div>
    </section>
  );
}

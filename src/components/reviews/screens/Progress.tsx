"use client";

interface Step {
  id: string;
  name: string;
}

const steps: Step[] = [
  { id: "Step 1", name: "Select" },
  { id: "Step 2", name: "Leave a review" },
  { id: "Step 3", name: "Finished" },
];

interface ProgressProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export default function Progress({ currentStep, onStepClick }: ProgressProps) {
  return (
    <nav aria-label="Progress" className="mb-6 hidden md:block">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step, index) => {
          let status: "complete" | "current" | "upcoming";
          if (index + 1 < currentStep) {
            status = "complete";
          } else if (index + 1 === currentStep) {
            status = "current";
          } else {
            status = "upcoming";
          }

          return (
            <li key={step.name} className="md:flex-1">
              <button
                onClick={() => onStepClick?.(index + 1)}
                disabled={status === "upcoming"}
                className={`w-full text-left ${status === "upcoming" ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div
                  className={`flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 ${
                    status === "complete" || status === "current"
                      ? "border-red-600"
                      : "border-gray-200"
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${
                      status === "complete" || status === "current"
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

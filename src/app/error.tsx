"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-8xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
      <p className="text-base font-semibold leading-8 text-sky-600">Oops</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        Oh no, something went wrong...
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">
        Sorry about the issue! Maybe refresh?
      </p>
      <div className="mt-10">
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="text-sm font-semibold leading-7 text-sky-600"
        >
          <span aria-hidden="true">&larr;</span> Try Again
        </button>
      </div>
    </main>
  );
}

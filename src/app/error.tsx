"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-700">
          Something went wrong
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Try Again
          </button>
          <a
            href="/"
            className="rounded-lg bg-gray-600 px-6 py-3 text-white transition-colors hover:bg-gray-700"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}


"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-red-600">Critical Error</h1>
            <h2 className="mt-4 text-3xl font-semibold text-gray-700">
              Application Error
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A critical error occurred. Please refresh the page.
            </p>
            <div className="mt-8">
              <button
                onClick={reset}
                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}


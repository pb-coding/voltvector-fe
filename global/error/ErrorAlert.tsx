"use client";

import { FC, useCallback, useContext, useEffect } from "react";

import { ErrorHandlerContext } from "@/global/error/ErrorHandlerProvider";
import { clear } from "console";

const ErrorAlert: FC = () => {
  const { error, setError } = useContext(ErrorHandlerContext);

  const clearError = useCallback(
    () => setError({ message: null, status: null, active: false }),
    [setError]
  );

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);

      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  if (error?.active) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-50 max-w-md mx-auto mt-4 px-4"
        role="alert"
      >
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800">
          <svg
            className="flex-shrink-0 inline w-4 h-4 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Status Code: {error.status}</span>{" "}
            {error.message}
          </div>
          <button
            onClick={clearError}
            className="flex-shrink-0 ml-auto text-red-500 hover:text-red-600 focus:outline-none focus:text-red-600"
            aria-label="Close alert"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ErrorAlert;

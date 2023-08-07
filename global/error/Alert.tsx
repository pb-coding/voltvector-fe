"use client";

import { FC, useCallback, useContext, useEffect } from "react";

import { AlertContext } from "@/global/error/AlertProvider";

const ErrorAlert: FC = () => {
  const { alert, setAlert } = useContext(AlertContext);

  const clearAlert = useCallback(() => setAlert(null), [setAlert]);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        clearAlert();
      }, 3500);

      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [alert, clearAlert]);

  /*const errorColors = {
    container: {
      text: { 
        normal: "text-red-800",
        dark: "dark:text-red-400",
      },
      border: {
        normal: "border-red-300",
        dark: "dark:border-red-800",
      },
      bg: "bg-red-50",
    },
    button: {
      text: {
        normal: "text-red-500"
      },
      textHover: {
        normal: "hover:text-red-600",
      },
      textFocus: {
        normal: "focus:text-red-600",
      },
    }
  }

  const successColors = {
    container: {
      text: { 
        normal: "text-green-800",
        dark: "dark:text-green-400",
      },
      border: {
        normal: "border-green-300",
        dark: "dark:border-green-800",
      },
      bg: "bg-green-50",
    },
    button: {
      text: {
        normal: "text-red-500"
      },
      textHover: {
        normal: "hover:text-red-600",
      },
      textFocus: {
        normal: "focus:text-red-600",
      },
    }
  }*/

  const color = alert?.error ? "red" : "green";

  if (alert) {
    return (
      <div
        className="fixed top-0 left-0 w-full flex justify-center items-start pt-32 z-50"
        role="alert"
      >
        <div
          className={`flex items-center p-4 mb-4 text-sm text-${color}-800 border border-${color}-300 rounded-lg bg-${color}-50 dark:bg-gray-800 dark:text-${color}-400 dark:border-${color}-800`}
        >
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
            <span className="font-medium">
              {alert.error ? `Status Code: ${alert.status}` : "Success"}
            </span>{" "}
            {alert.message}
          </div>
          <button
            onClick={clearAlert}
            className={`flex-shrink-0 ml-auto text-${color}-500 hover:text-${color}-600 focus:outline-none focus:text-${color}-600`}
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

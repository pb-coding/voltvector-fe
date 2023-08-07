import { useCallback } from "react";

import { useAlert } from "@/global/hooks/useAlert";

export const useApiResponseAlert = () => {
  const { setAlert } = useAlert();

  const createApiResponseErrorAlert = useCallback(
    (errorStatusCode: number, message: string | null = null) => {
      let errorMessage = "";

      switch (errorStatusCode) {
        case 401:
          errorMessage =
            "You need to be authenticated to access this resource.";
          break;
        case 403:
          errorMessage = "You are not authorized to access this resource.";
          break;
        case 404:
          errorMessage = "The resource you are looking for does not exist.";
          break;
        case 500:
          errorMessage = "An error occurred while processing your request.";
          break;
        default:
          errorMessage = "An error occurred while processing your request.";
          break;
      }

      // if a custom message is provided, use it instead
      if (message) {
        errorMessage = message;
      }
      setAlert({
        message: errorMessage,
        status: errorStatusCode,
        error: true,
      });
    },
    [setAlert]
  );

  return { createApiResponseErrorAlert };
};

import { useCallback, useContext } from "react";
import { ErrorHandlerContext } from "@/global/error/ErrorHandlerProvider";

export const useApiResponseAlert = () => {
  const { setErrorAlert } = useContext(ErrorHandlerContext);

  const createApiResponseErrorAlert = useCallback(
    (errorStatusCode: number) => {
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
      setErrorAlert({
        message: errorMessage,
        status: errorStatusCode,
        active: true,
      });
    },
    [setErrorAlert]
  );

  return { createApiResponseErrorAlert };
};

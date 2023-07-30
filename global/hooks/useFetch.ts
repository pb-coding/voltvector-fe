import { useCallback, useContext, useState, useEffect } from "react";

import { ErrorHandlerContext } from "@/global/error/ErrorHandlerProvider";
import { useAuthenticatedAxios } from "@/global/auth/hooks/useAuthenticatedAxios";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null); // TODO: type this
  const [loading, setLoading] = useState(false);
  const { setError } = useContext(ErrorHandlerContext);

  const authenticatedAxios = useAuthenticatedAxios();

  const createApiResponseErrorAlert = useCallback(
    (errorStatusCode: number) => {
      let errorMessage = "";

      switch (errorStatusCode) {
        case 401:
          errorMessage = "You are not authorized to access this resource.";
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
      setError({
        message: errorMessage,
        status: errorStatusCode,
        active: true,
      });
    },
    [setError]
  );

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await authenticatedAxios.get(url, {
          signal: controller.signal,
        });
        isMounted && setData(response.data);
      } catch (error: any) {
        const errorStatusCode = error.response.status as number;
        createApiResponseErrorAlert(errorStatusCode);
      } finally {
        isMounted && setLoading(false); // TODO: check if the isMounted is necessary
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url, authenticatedAxios, createApiResponseErrorAlert]);

  return { data, loading };
};

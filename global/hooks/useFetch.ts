import { useCallback, useContext, useState, useEffect } from "react";

import { ErrorHandlerContext } from "@/global/error/ErrorHandlerProvider";
import { useAuthenticatedAxios } from "@/global/auth/hooks/useAuthenticatedAxios";

export const useFetch = <DataType>(url: string) => {
  const [data, setData] = useState<DataType | null>(null); // TODO: type this
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { setErrorAlert } = useContext(ErrorHandlerContext);

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
      setErrorAlert({
        message: errorMessage,
        status: errorStatusCode,
        active: true,
      });
    },
    [setErrorAlert]
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
        isMounted && setError(error);
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

  return { data, loading, error };
};

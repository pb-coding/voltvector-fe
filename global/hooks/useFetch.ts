import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useApiResponseAlert } from "./useApiResponseAlert";
import { useAuthenticatedAxios } from "@/global/auth/hooks/useAuthenticatedAxios";
import { DASHBOARD_PATH } from "@/global/routes/routes";

export const useFetch = <DataType>(
  url: string,
  shouldFetch: boolean = true
) => {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const authenticatedAxios = useAuthenticatedAxios();
  const { createApiResponseErrorAlert } = useApiResponseAlert();
  const router = useRouter();

  const fetchData = useCallback(async () => {
    let isMounted = true;
    const controller = new AbortController();

    setLoading(true);
    try {
      const response = await authenticatedAxios.get(url, {
        signal: controller.signal,
      });
      isMounted && setData(response.data);
    } catch (error: any) {
      const errorStatusCode = error.response.status as number;
      const errorMessage = error.response.data.error as string;
      createApiResponseErrorAlert(errorStatusCode, errorMessage);
      isMounted && setError(error);

      if (errorStatusCode === 403) {
        router.push(DASHBOARD_PATH);
      }
    } finally {
      isMounted && setLoading(false); // TODO: check if the isMounted is necessary
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url, authenticatedAxios, createApiResponseErrorAlert, router]);

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
    }
  }, [fetchData, shouldFetch]);

  return { data, setData, loading, error, refetch: fetchData };
};

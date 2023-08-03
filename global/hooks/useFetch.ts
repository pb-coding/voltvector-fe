import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useApiResponseAlert } from "./useApiResponseAlert";
import { useAuthenticatedAxios } from "@/global/auth/hooks/useAuthenticatedAxios";

export const useFetch = <DataType>(url: string) => {
  const [data, setData] = useState<DataType | null>(null); // TODO: type this
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
      createApiResponseErrorAlert(errorStatusCode);
      isMounted && setError(error);

      if (errorStatusCode === 403) {
        router.push("/dashboard");
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
    fetchData();
  }, [fetchData]);

  return { data, setData, loading, error, refetch: fetchData };
};

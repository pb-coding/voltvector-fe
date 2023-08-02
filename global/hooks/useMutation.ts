import { useState } from "react";
import { useAuthenticatedAxios } from "@/global/auth/hooks/useAuthenticatedAxios";
import { useApiResponseAlert } from "@/global/hooks/useApiResponseAlert";

export const useMutation = <ResponseType, PayloadType>(
  url: string,
  method: "post" | "put" | "patch" | "delete"
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { createApiResponseErrorAlert } = useApiResponseAlert();
  const authenticatedAxios = useAuthenticatedAxios();

  const mutate = async (
    payload?: PayloadType
  ): Promise<ResponseType | null> => {
    setLoading(true);
    try {
      console.log(payload);
      let response;

      switch (method) {
        case "post":
          response = await authenticatedAxios.post<ResponseType>(url, payload);
          break;
        case "put":
          response = await authenticatedAxios.put<ResponseType>(url, payload);
          break;
        case "patch":
          response = await authenticatedAxios.patch<ResponseType>(url, payload);
          break;
        case "delete":
          response = await authenticatedAxios.delete<ResponseType>(url, {
            data: payload,
          });
          break;
        default:
          throw new Error("Invalid method");
      }

      console.log(response.data);
      return response.data;
    } catch (error: any) {
      const errorStatusCode = error.response.status as number;
      createApiResponseErrorAlert(errorStatusCode);
      setError(error);

      return null;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
};

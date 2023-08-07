import { useState } from "react";
import { useAuthenticatedAxios } from "@/global/auth/hooks/useAuthenticatedAxios";
import { useApiResponseAlert } from "@/global/hooks/useApiResponseAlert";

export const useMutation = <ResponseType, PayloadType>(
  path: string,
  method: "post" | "put" | "patch" | "delete"
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { createApiResponseErrorAlert } = useApiResponseAlert();
  const authenticatedAxios = useAuthenticatedAxios();

  type MutationRequest = {
    pathVariable?: number | null;
    payload?: PayloadType;
  };

  const mutate = async ({
    pathVariable = null,
    payload,
  }: MutationRequest): Promise<ResponseType | null> => {
    setLoading(true);
    try {
      console.log(payload);
      let response;
      let fullPath = path;
      if (pathVariable !== null) {
        fullPath = `${path}/${pathVariable}`;
      }

      switch (method) {
        case "post":
          response = await authenticatedAxios.post<ResponseType>(
            fullPath,
            payload
          );
          break;
        case "put":
          response = await authenticatedAxios.put<ResponseType>(
            fullPath,
            payload
          );
          break;
        case "patch":
          response = await authenticatedAxios.patch<ResponseType>(
            fullPath,
            payload
          );
          break;
        case "delete":
          response = await authenticatedAxios.delete<ResponseType>(fullPath, {
            data: payload,
          });
          break;
        default:
          throw new Error("Invalid mutation method");
      }

      return response as ResponseType;
    } catch (error: any) {
      const errorStatusCode = error.response.status as number;
      const errorMessage = error.response.data.error as string;
      console.log(error);
      createApiResponseErrorAlert(errorStatusCode, errorMessage);
      setError(error);

      return null;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
};

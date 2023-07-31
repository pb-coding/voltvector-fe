import { useEffect } from "react";
import { AxiosInstance } from "axios";

import { axiosPrivate } from "@/global/auth/axios";
import { useRefreshToken } from "@/global/auth/hooks/useRefreshToken";
import { useUserAuth } from "@/global/auth/hooks/useUserAuth";

export const useAuthenticatedAxios = (): AxiosInstance => {
  const refresh = useRefreshToken();
  const { userAuth } = useUserAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${userAuth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const previousRequest = error?.config;
        if (error?.response?.status === 401 && !previousRequest?.sent) {
          previousRequest.sent = true;
          const newAccessToken = await refresh();
          previousRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(previousRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [userAuth, refresh]);

  return axiosPrivate;
};

import axios from "@/global/auth/axios";
import { useRouter } from "next/navigation";

import { useAuth } from "@/global/auth/hooks/useAuth";
import { REFRESH_PATH } from "@/global/apiRoutes";

export const useRefreshToken = () => {
  const { setAccessToken } = useAuth();
  const router = useRouter();

  const refresh = async () => {
    try {
      const response = await axios.get(REFRESH_PATH, { withCredentials: true });
      const accessToken = response.data.accessToken;
      console.log(`refreshed token: ${JSON.stringify(accessToken)}`);

      setAccessToken(accessToken);
      return accessToken;
    } catch (error: any) {
      // console.log(error);
      const errorStatusCode = error.response.status as number;
      if (errorStatusCode === 401) {
        router.push("/login");
      }

      return null;
    }
  };
  return refresh;
};

import axios from "@/global/auth/axios";
import { useRouter } from "next/navigation";

import { REFRESH_PATH } from "@/global/apiRoutes";
import { UserAuthStateType } from "@/global/auth/types";

export const useRefreshToken = (
  callOrigin: string,
  setUserAuth: (userAuth: UserAuthStateType) => void
) => {
  const router = useRouter();

  const refresh = async () => {
    try {
      const response = await axios.get(REFRESH_PATH, { withCredentials: true });
      const userAuthData = response.data.userAuthData;
      console.log(
        `${callOrigin}: refreshed tokens: ${JSON.stringify(userAuthData)}`
      );

      setUserAuth(userAuthData);
      return userAuthData.accessToken;
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

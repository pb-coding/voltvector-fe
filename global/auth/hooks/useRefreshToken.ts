import axios from "@/global/auth/axios";
import { useUserAuth } from "@/global/auth/hooks/useUserAuth";
import { REFRESH_PATH } from "@/global/apiRoutes";

export const useRefreshToken = () => {
  const { setUserAuth } = useUserAuth();

  const refresh = async () => {
    const response = await axios.get(REFRESH_PATH, { withCredentials: true });
    const userAuthData = response.data.userAuthData;
    console.log(`useRefreshToken response: ${userAuthData}`);

    setUserAuth(userAuthData);
    return userAuthData.accessToken;
  };
  return refresh;
};

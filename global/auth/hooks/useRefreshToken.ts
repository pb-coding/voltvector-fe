import axios from "@/global/auth/axios";
import { useAuth } from "@/global/auth/hooks/useAuth";
import { REFRESH_PATH } from "@/global/auth/constants";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get(REFRESH_PATH, { withCredentials: true });
    console.log(
      `useRefreshToken response: ${JSON.stringify(response.data.accessToken)}`
    );

    const accessToken = response.data.accessToken;
    setAuth({ accessToken: accessToken });
    return accessToken;
  };
  return refresh;
};

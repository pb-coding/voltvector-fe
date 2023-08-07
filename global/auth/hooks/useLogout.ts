import { useRouter } from "next/navigation";

import { useAuth } from "@/global/auth/hooks/useAuth";
import { LOGOUT_PATH } from "@/global/routes/apiRoutes";
import { LOGIN_PATH } from "@/global/routes/routes";
import axios from "@/global/auth/axios";

export const useLogout = () => {
  const { setAccessToken } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await axios.get(LOGOUT_PATH, { withCredentials: true });
    console.log(JSON.stringify(response.data));
    setAccessToken(null);
    router.push(LOGIN_PATH);
  };

  return handleLogout;
};

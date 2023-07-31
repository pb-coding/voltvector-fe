import { useRouter } from "next/navigation";

import { useUserAuth } from "@/global/auth/hooks/useUserAuth";
import { LOGOUT_PATH } from "@/global/apiRoutes";
import axios from "@/global/auth/axios";

export const useLogout = () => {
  const { setUserAuth } = useUserAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await axios.get(LOGOUT_PATH, { withCredentials: true });
    console.log(JSON.stringify(response.data));
    setUserAuth({});
    router.push("/login");
  };

  return handleLogout;
};

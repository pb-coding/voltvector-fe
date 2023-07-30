import { useRouter } from "next/navigation";

import { useAuth } from "@/global/auth/hooks/useAuth";
import { LOGOUT_PATH } from "@/global/routes";
import axios from "@/global/auth/axios";

export const useLogout = () => {
  const { setAuth } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await axios.get(LOGOUT_PATH, { withCredentials: true });
    console.log(JSON.stringify(response.data));
    setAuth({});
    router.push("/login");
  };

  return handleLogout;
};

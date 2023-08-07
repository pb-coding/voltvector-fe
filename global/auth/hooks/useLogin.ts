import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "@/global/auth/axios";
import { useAuth } from "@/global/auth/hooks/useAuth";
import { LOGIN_PATH } from "@/global/routes/apiRoutes";
import { useApiResponseAlert } from "@/global/hooks/useApiResponseAlert";
import { DASHBOARD_PATH } from "@/global/routes/routes";

export const useLogin = () => {
  const { setAccessToken } = useAuth();
  const router = useRouter();
  const { createApiResponseErrorAlert } = useApiResponseAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_PATH,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response.data.accessToken;

      console.log(accessToken);
      setAccessToken(accessToken);
      setEmail("");
      setPassword("");

      router.push(DASHBOARD_PATH);
    } catch (error: any) {
      const errorStatusCode = error.response.status as number;
      const errorMessage = error.response.data.error as string;
      createApiResponseErrorAlert(errorStatusCode, errorMessage);
      setEmail("");
      setPassword("");
    }
  };

  return { handleLoginSubmit, email, setEmail, password, setPassword };
};

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "@/global/auth/axios";
import { useUserAuth } from "@/global/auth/hooks/useUserAuth";
import { LOGIN_PATH } from "@/global/apiRoutes";

export const useLogin = () => {
  const { setUserAuth } = useUserAuth();
  const router = useRouter();

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
      const userAuthData = response.data.userAuthData;

      console.log(userAuthData);
      // TODO: implement roles in FE and BE
      // const roles = response?.data?.roles;

      setUserAuth(userAuthData);
      setEmail("");
      setPassword("");

      router.push("/dashboard"); //TODO: outsource paths in constants
    } catch (error) {
      // TODO: Handle errors
      console.error("An error occurred while logging in", error);
    }
  };

  return { handleLoginSubmit, email, setEmail, password, setPassword };
};

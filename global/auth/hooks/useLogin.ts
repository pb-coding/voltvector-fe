import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "@/global/auth/axios";
import { useAuth } from "@/global/auth/hooks/useAuth";
import { LOGIN_PATH } from "@/global/routes";

export const useLogin = () => {
  const { setAuth } = useAuth();
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
      console.log(JSON.stringify(response.data));

      const accessToken = response?.data?.accessToken;
      // TODO: implement roles in FE and BE
      // const roles = response?.data?.roles;
      setAuth({ accessToken: accessToken });
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

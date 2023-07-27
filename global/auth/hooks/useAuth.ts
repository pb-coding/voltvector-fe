import { useContext, useDebugValue } from "react";

import { AuthContext } from "@/global/auth/AuthProvider";
import { AuthContextType } from "@/global/auth/types";

export const useAuth = (): AuthContextType => {
  const { auth } = useContext(AuthContext);

  useDebugValue(auth, (auth) => (auth?.user ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
};

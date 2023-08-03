import { useContext, useDebugValue } from "react";

import { AuthContext } from "@/global/auth/AuthProvider";
import { AuthContextType } from "@/global/auth/types";

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

import { useContext, useDebugValue } from "react";

import { UserAuthContext } from "@/global/auth/UserAuthProvider";
import { UserAuthContextType } from "@/global/auth/types";

export const useUserAuth = (): UserAuthContextType => {
  const { userAuth } = useContext(UserAuthContext);

  useDebugValue(userAuth, (userAuth) =>
    userAuth?.name ? "Logged In" : "Logged Out"
  );
  return useContext(UserAuthContext);
};

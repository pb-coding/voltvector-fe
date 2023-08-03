import { useContext, useDebugValue } from "react";

import { UserContext } from "@/global/auth/UserProvider";
import { UserContextType } from "@/global/auth/types";

export const useUser = (): UserContextType => {
  // TODO: remove this
  const { userData } = useContext(UserContext);
  useDebugValue(userData, (userData) =>
    userData?.name ? "Logged In" : "Logged Out"
  );

  return useContext(UserContext);
};

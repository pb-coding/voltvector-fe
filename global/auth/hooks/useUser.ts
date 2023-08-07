import { useContext, useDebugValue } from "react";

import { UserContext } from "@/global/auth/UserProvider";
import { UserContextType } from "@/global/auth/types";

export const useUser = (): UserContextType => useContext(UserContext);

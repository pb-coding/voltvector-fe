"use client";

import { createContext, FC, useState, useEffect, ReactNode } from "react";
import { UserAuthStateType, UserAuthContextType } from "@/global/auth/types";
import { useRefreshToken } from "./hooks/useRefreshToken";

export const UserAuthContext = createContext<UserAuthContextType>({
  userAuth: {},
  setUserAuth: () => {},
});

type UserAuthProviderProps = {
  children: ReactNode;
};

const UserAuthProvider: FC<UserAuthProviderProps> = ({ children }) => {
  const [userAuth, setUserAuth] = useState<UserAuthStateType>({});

  // need to pass setUserAuth to useRefreshToken to avoid circular dependency
  const refresh = useRefreshToken("userAuth", setUserAuth);

  useEffect(() => {
    const checkUserAuth = async () => {
      if (!userAuth.roles) await refresh();
    };

    checkUserAuth();
  }, [userAuth, refresh]);

  return (
    <UserAuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;

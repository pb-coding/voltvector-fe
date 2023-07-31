"use client";

import { createContext, FC, useState, ReactNode } from "react";
import { UserAuthStateType, UserAuthContextType } from "@/global/auth/types";

export const UserAuthContext = createContext<UserAuthContextType>({
  userAuth: {},
  setUserAuth: () => {},
});

type UserAuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<UserAuthProviderProps> = ({ children }) => {
  const [userAuth, setUserAuth] = useState<UserAuthStateType>({});

  return (
    <UserAuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthProvider;

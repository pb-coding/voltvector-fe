"use client";

import { createContext, FC, useState, ReactNode } from "react";
import { AuthStateType, AuthContextType } from "@/global/auth/types";

export const AuthContext = createContext<AuthContextType>({
  auth: { accessToken: undefined },
  setAuth: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthStateType>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

"use client";

import { createContext, useState, ReactNode } from "react";

// TODO: implement roles in FE and BE
// roles?: string[];
interface AuthState {
  user?: string;
  accessToken?: string;
}

interface AuthContextProps {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

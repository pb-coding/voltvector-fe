"use client";

import { createContext, FC, useState, useEffect, ReactNode } from "react";

import { UserDataStateType, UserContextType } from "@/global/auth/types";
import { useFetch } from "../hooks/useFetch";
import LoadingSpinner from "../loading/LoadingSpinner";
import { USER_PATH_ME } from "../apiRoutes";

export const UserContext = createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const { loading, data } = useFetch<UserDataStateType>(USER_PATH_ME);

  if (loading) return <LoadingSpinner />;

  return (
    <UserContext.Provider
      value={{
        userData: data || null,
        setUserData: () => {},
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

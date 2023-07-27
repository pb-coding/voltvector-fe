"use client";

import { createContext, FC, ReactNode, useState } from "react";
import { ErrorContextType, ErrorStateType } from "@/global/error/types";

export const ErrorHandlerContext = createContext<ErrorContextType>({
  error: { message: null, status: null, active: false },
  setError: () => {},
});

type ErrorHandlerProviderProps = {
  children: ReactNode;
};

const ErrorHandlerProvider: FC<ErrorHandlerProviderProps> = ({ children }) => {
  const [error, setError] = useState<ErrorStateType>({
    message: null,
    status: null,
    active: false,
  });

  return (
    <ErrorHandlerContext.Provider value={{ error, setError }}>
      {children}
    </ErrorHandlerContext.Provider>
  );
};

export default ErrorHandlerProvider;

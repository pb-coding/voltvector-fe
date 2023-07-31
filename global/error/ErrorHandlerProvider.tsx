"use client";

import { createContext, FC, ReactNode, useState } from "react";
import { ErrorContextType, ErrorStateType } from "@/global/error/types";

export const ErrorHandlerContext = createContext<ErrorContextType>({
  errorAlert: { message: null, status: null, active: false },
  setErrorAlert: () => {},
});

type ErrorHandlerProviderProps = {
  children: ReactNode;
};

const ErrorHandlerProvider: FC<ErrorHandlerProviderProps> = ({ children }) => {
  const [errorAlert, setErrorAlert] = useState<ErrorStateType>({
    message: null,
    status: null,
    active: false,
  });

  return (
    <ErrorHandlerContext.Provider value={{ errorAlert, setErrorAlert }}>
      {children}
    </ErrorHandlerContext.Provider>
  );
};

export default ErrorHandlerProvider;

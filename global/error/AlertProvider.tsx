"use client";

import { createContext, FC, ReactNode, useState } from "react";
import { AlertContextType, AlertStateType } from "@/global/error/types";

export const AlertContext = createContext<AlertContextType>({
  alert: null,
  setAlert: () => {},
});

type AlertProviderProps = {
  children: ReactNode;
};

const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<AlertStateType | null>(null);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;

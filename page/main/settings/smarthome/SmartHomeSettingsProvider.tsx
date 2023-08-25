"use client";

import { createContext, FC, ReactNode } from "react";

import { useFetch } from "@/global/hooks/useFetch";
import { SMART_HOME_PROVIDER_PATH } from "@/global/routes/apiRoutes";
import LoadingSpinner from "@/global/loading/LoadingSpinner";
import { SmartHomeProviderOverview } from "./types";

type SmartHomeSettingsContextType = {
  providers: SmartHomeProviderOverview[] | null;
  refetchProviders: () => void;
};

export const SmartHomeSettingsContext =
  createContext<SmartHomeSettingsContextType>({
    providers: [],
    refetchProviders: () => {},
  });

type SmartHomeSettingsProviderProps = {
  children: ReactNode;
};

const SmartHomeSettingsProvider: FC<SmartHomeSettingsProviderProps> = ({
  children,
}) => {
  const {
    loading: fetchLoading,
    data: providers,
    refetch: refetchProviders,
  } = useFetch<Array<SmartHomeProviderOverview> | null>(
    SMART_HOME_PROVIDER_PATH
  );

  if (fetchLoading) {
    return <LoadingSpinner size="sm" />;
  }

  return (
    <SmartHomeSettingsContext.Provider
      value={{
        providers,
        refetchProviders,
      }}
    >
      {children}
    </SmartHomeSettingsContext.Provider>
  );
};

export default SmartHomeSettingsProvider;

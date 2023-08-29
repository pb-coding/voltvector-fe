"use client";

import { FC } from "react";

import { useFetch } from "@/global/hooks/useFetch";
import { SMART_HOME_PROVIDER_PATH } from "@/global/routes/apiRoutes";
import { SmartHomeProviderOverview } from "@/page/main/settings/smarthome/types";
import LoadingSpinner from "@/global/loading/LoadingSpinner";
import SmartHomeDevicesTable from "@/page/main/smarthome/tables/SmartHomeDevicesTable";

const SmartHomeDevicesOverview: FC = () => {
  const { loading: fetchLoading, data: providers } =
    useFetch<Array<SmartHomeProviderOverview> | null>(SMART_HOME_PROVIDER_PATH);

  if (fetchLoading) {
    return <LoadingSpinner size="sm" />;
  }

  if (!providers) return <div>loading..</div>;

  return providers.map((provider, index) => (
    <SmartHomeDevicesTable
      key={index}
      provider={provider.provider}
      saved={provider.saved}
      authorized={provider.authorized}
    />
  ));
};

export default SmartHomeDevicesOverview;

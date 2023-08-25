"use client";

import { FC } from "react";

import SmartHomeProviderCard from "@/page/main/settings/smarthome/SmartHomeProviderCard";
import { useProviderAuth } from "./hooks/useProviderAuth";

const SmartHomeProviderOverview: FC = () => {
  const { providers } = useProviderAuth();

  if (!providers) return <div>loading..</div>;

  return providers.map((provider, index) => (
    <SmartHomeProviderCard
      key={index}
      provider={provider.provider}
      saved={provider.saved}
      authorized={provider.authorized}
    />
  ));
};

export default SmartHomeProviderOverview;

"use client";

import React, { FC, use, useEffect, useState } from "react";

import { useFetch } from "@/global/hooks/useFetch";
import { ENPHASE_OAUTH_PATH } from "@/global/apiRoutes";
import EnphaseAuthCard from "@/page/main/settings/enphase/EnphaseAuthCard";
import { EnphaseAppType } from "@/page/main/settings/enphase/types";
import LoadingSpinner from "@/global/loading/LoadingSpinner";

const EnphaseAuthSection: FC = () => {
  // const [enphaseApps, setEnphaseApps] = useState<EnphaseAppType[] | null>(null);
  const { loading, data: enphaseApps } = useFetch<EnphaseAppType[]>(
    ENPHASE_OAUTH_PATH + "?userid=2"
  );

  // useEffect(() => {

  if (loading) return <LoadingSpinner />;

  if (enphaseApps && enphaseApps.length > 0) {
    return (
      <>
        {enphaseApps.map((app: EnphaseAppType) => (
          <EnphaseAuthCard key={app.name} app={app} />
        ))}
      </>
    );
  }

  return null; // TODO: handle error fallback
};
export default EnphaseAuthSection;

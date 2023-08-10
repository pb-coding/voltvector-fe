"use client";

import React, { FC } from "react";

import { useUser } from "@/global/auth/hooks/useUser";
import { useFetch } from "@/global/hooks/useFetch";
import { ENPHASE_OAUTH_PATH } from "@/global/routes/apiRoutes";
import EnphaseAuthCard from "@/page/main/settings/enphase/EnphaseAuthCard";
import { EnphaseAppType } from "@/page/main/settings/enphase/types";
import LoadingSpinner from "@/global/loading/LoadingSpinner";

const EnphaseAuthSection: FC = () => {
  const { loading, data: enphaseApps } =
    useFetch<EnphaseAppType[]>(ENPHASE_OAUTH_PATH);

  const { userData } = useUser();
  const userId = userData?.id;

  // TODO: fix loading spinner position
  if (loading || !userId) return <LoadingSpinner classNames="col-span-2" />;

  if (enphaseApps && enphaseApps.length > 0) {
    return (
      <>
        {enphaseApps.map((app: EnphaseAppType) => (
          <EnphaseAuthCard key={app.name} app={app} userId={userId} />
        ))}
      </>
    );
  }

  return null; // TODO: handle error fallback
};
export default EnphaseAuthSection;

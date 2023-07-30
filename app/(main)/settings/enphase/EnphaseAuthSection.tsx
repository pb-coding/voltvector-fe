"use client";

import React, { FC, useEffect, useState } from "react";
import { useFetch } from "@/global/hooks/useFetch";
import { ENPHASE_OAUTH_PATH } from "@/global/routes";
import EnphaseAuthCard from "@/app/(main)/settings/enphase/EnphaseAuthCard";
import { EnphaseAppType } from "@/app/(main)/settings/enphase/types";

const EnphaseAuthSection: FC = () => {
  const [enphaseApps, setEnphaseApps] = useState<EnphaseAppType[] | null>(null);
  const { loading, data } = useFetch(ENPHASE_OAUTH_PATH + "?userid=2");

  useEffect(() => {
    if (loading) return;
    // TODO: think about error handling
    // if (error) return
    if (data == null) return;
    console.log(data);
    setEnphaseApps(data);
  }, [loading, data]);

  return (
    <>
      {loading && <p>Loading spinner coming soon..</p>}
      {!loading &&
        enphaseApps &&
        enphaseApps.length > 0 &&
        enphaseApps.map((app, i) => <EnphaseAuthCard key={i} app={app} />)}
    </>
  );
};
export default EnphaseAuthSection;

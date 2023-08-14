"use client";

import { FC } from "react";

import EnergyDataChart from "@/page/main/dashboard/EnergyDataChart";
import { useFetch } from "@/global/hooks/useFetch";
import { ENERGY_PATH } from "@/global/routes/apiRoutes";
import { EnergyData } from "@/page/main/dashboard/types";

const EnergyDataOverview: FC = () => {
  const {
    loading: fetchLoading,
    data: energyData,
    refetch,
  } = useFetch<Array<EnergyData> | null>(
    ENERGY_PATH +
      "?startAt=2023-08-14T08:00:00.000Z&endAt=2023-08-14T20:00:00.000Z"
  );

  return (
    <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
      {fetchLoading || !energyData ? (
        <p>Loading...</p>
      ) : (
        <EnergyDataChart energyData={energyData} />
      )}
    </div>
  );
};

export default EnergyDataOverview;

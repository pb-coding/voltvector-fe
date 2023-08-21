"use client";

import { FC } from "react";

import ChartDateNavigation from "./navigation/ChartDateNavigation";
import EnergyDataChart from "@/page/main/dashboard/energyChart/EnergyDataChart";
import { useEnergyChart } from "./hooks/useEnergyChart";

const EnergyDataOverview: FC = () => {
  const { fetchLoading, selectedEnergyData } = useEnergyChart();

  return (
    <div className="border-2 rounded-lg border-gray-300 dark:border-gray-600 h-auto mb-4 p-4">
      <ChartDateNavigation />
      {fetchLoading || !selectedEnergyData ? (
        <p>Loading...</p>
      ) : (
        <EnergyDataChart energyData={selectedEnergyData} />
      )}
    </div>
  );
};

export default EnergyDataOverview;

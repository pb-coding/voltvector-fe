import { useContext } from "react";

import { EnergyChartContext } from "@/page/main/dashboard/energyChart/EnergyChartContextProvider";

export const useEnergyChart = () => {
  return useContext(EnergyChartContext);
};

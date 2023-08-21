import { FC } from "react";

import EnergyDataOverview from "./EnergyDataOverview";
import EnergyChartContextProvider from "./EnergyChartContextProvider";

const EnergyDataOverviewCard: FC = () => {
  return (
    <EnergyChartContextProvider>
      <EnergyDataOverview />
    </EnergyChartContextProvider>
  );
};

export default EnergyDataOverviewCard;

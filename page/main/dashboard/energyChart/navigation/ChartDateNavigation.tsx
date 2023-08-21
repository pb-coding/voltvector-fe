import { FC } from "react";

import ChartDateNavigator from "@/page/main/dashboard/energyChart/navigation/ChartDateNavigator";
import ChartTodayButton from "@/page/main/dashboard/energyChart/navigation/ChartTodayButton";
import ChartViewDropdown from "@/page/main/dashboard/energyChart/navigation/dropdown/ChartViewDropdown";
import ChartSettings from "@/page/main/dashboard/energyChart/navigation/settings/ChartSettings";

const ChartDateNavigation: FC = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-2 flex space-x-2">
        <ChartTodayButton />
        <ChartSettings />
      </div>
      <div className="col-span-3">
        <ChartDateNavigator />
      </div>
      <div className="col-span-2 flex">
        <ChartViewDropdown />
      </div>
    </div>
  );
};

export default ChartDateNavigation;

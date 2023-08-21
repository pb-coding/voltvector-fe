import { FC } from "react";
import { isSameDay } from "date-fns";

import LeftArrowIcon from "@/global/icons/LeftArrowIcon";
import RightArrowIcon from "@/global/icons/RightArrowIcon";
import { useEnergyChart } from "@/page/main/dashboard/energyChart/hooks/useEnergyChart";
import { SkipDirection } from "@/page/main/dashboard/energyChart/types";

const ChartDateNavigator: FC = () => {
  const { handlePreviousNextClick, selectedTimeframe } = useEnergyChart();
  const getDisplayText = () => {
    const { startAt, endAt } = selectedTimeframe;
    if (isSameDay(startAt, endAt)) {
      return startAt.toLocaleDateString();
    }

    return `${startAt.toLocaleDateString()} - ${endAt.toLocaleDateString()}`;
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-between w-full text-gray-600 dark:text-gray-400 bg-gray-100 rounded-lg dark:bg-gray-800 mx-2">
        <button
          type="button"
          className="inline-flex items-center justify-center h-10 px-4 bg-gray-100 rounded-l-lg dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800"
          onClick={() => handlePreviousNextClick(SkipDirection.Backward)}
        >
          <LeftArrowIcon className="w-3 h-3" />
          <span className="sr-only">Previous</span>
        </button>
        <span className="flex-shrink-0 mx-1 text-sm font-medium">
          {getDisplayText()}
        </span>
        <button
          type="button"
          className="inline-flex items-center justify-center h-10 px-4 bg-gray-100 rounded-r-lg dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800"
          onClick={() => handlePreviousNextClick(SkipDirection.Forward)}
        >
          <RightArrowIcon className="w-3 h-3" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ChartDateNavigator;

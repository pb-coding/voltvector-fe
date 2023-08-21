import { Dispatch, FC, SetStateAction } from "react";

import { useEnergyChart } from "@/page/main/dashboard/energyChart/hooks/useEnergyChart";
import { SelectedChartView } from "@/page/main/dashboard/energyChart/types";

type ChartViewDropdownMenuProps = {
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const ChartViewDropdownMenu: FC<ChartViewDropdownMenuProps> = ({
  setIsDropdownOpen,
}) => {
  const { handleChartViewSwitch } = useEnergyChart();

  return (
    <div className="absolute right-0 transform mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <a
            onClick={() =>
              handleChartViewSwitch(SelectedChartView.Day, setIsDropdownOpen)
            }
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Day
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              handleChartViewSwitch(SelectedChartView.Week, setIsDropdownOpen)
            }
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Week
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              handleChartViewSwitch(SelectedChartView.Month, setIsDropdownOpen)
            }
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Month
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Custom
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ChartViewDropdownMenu;

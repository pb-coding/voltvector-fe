import { Dispatch, FC, SetStateAction } from "react";

import DropdownArrowIcon from "@/global/icons/DropdownArrowIcon";
import { useEnergyChart } from "@/page/main/dashboard/energyChart/hooks/useEnergyChart";
import { SelectedChartView } from "@/page/main/dashboard/energyChart/types";

type ChartViewDropdownMenuProps = {
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const ChartViewToggleDropdown: FC<ChartViewDropdownMenuProps> = ({
  setIsDropdownOpen,
}) => {
  const { selectedChartView } = useEnergyChart();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <button
      className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      type="button"
      onClick={toggleDropdown}
    >
      {SelectedChartView[selectedChartView]}
      <DropdownArrowIcon />
    </button>
  );
};

export default ChartViewToggleDropdown;

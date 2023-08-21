import { FC } from "react";
import { useEnergyChart } from "@/page/main/dashboard/energyChart/hooks/useEnergyChart";

const ChartTodayButton: FC = () => {
  const { setTodayTimeframe } = useEnergyChart();
  return (
    <button
      className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-[#ff7676] dark:hover:bg-gray-700 dark:hover:text-white"
      type="button"
      onClick={setTodayTimeframe}
    >
      Today
    </button>
  );
};

export default ChartTodayButton;

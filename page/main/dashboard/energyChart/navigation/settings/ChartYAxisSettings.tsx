import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { useEnergyChart } from "../../hooks/useEnergyChart";

const ChartYAxisSettings: FC = () => {
  const {
    yAxisRange,
    setYAxisRange,
    customYAxisEnabled,
    setCustomYAxisEnabled,
  } = useEnergyChart();

  const handleSliderChange = (e: any) => {
    setYAxisRange(e.target.value);
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <input
            id="default-checkbox"
            type="checkbox"
            checked={customYAxisEnabled}
            onChange={() => setCustomYAxisEnabled(!customYAxisEnabled)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Set custom Y-Axis range
          </label>
        </div>
        <div>
          <span className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Y-Axis: {customYAxisEnabled ? yAxisRange : "Auto"}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <label
          htmlFor="small-range"
          className={twMerge(
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            !customYAxisEnabled && "dark:text-gray-500"
          )}
        >
          Y-Axis Range
        </label>
        <input
          id="steps-range"
          type="range"
          disabled={!customYAxisEnabled}
          min={100}
          max={2500}
          step={100}
          value={yAxisRange}
          onChange={handleSliderChange}
          className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
        ></input>
      </div>
    </div>
  );
};

export default ChartYAxisSettings;

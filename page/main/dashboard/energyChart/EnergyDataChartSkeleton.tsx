import { FC } from "react";

const EnergyDataChartSkeleton: FC = () => {
  return (
    <div className="relative w-full h-96 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      {/* X Axis */}
      <div className="absolute bottom-0 w-full h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>

      {/* Y Axis */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gray-300 dark:bg-gray-600 rounded"></div>

      {/* Sample gridlines */}
      <div className="absolute top-1/4 w-full h-px bg-gray-300 dark:bg-gray-600"></div>
      <div className="absolute top-1/2 w-full h-px bg-gray-300 dark:bg-gray-600"></div>
      <div className="absolute top-3/4 w-full h-px bg-gray-300 dark:bg-gray-600"></div>

      {/* Sample lines for production and consumption */}
      <div className="absolute top-1/4 w-2/3 h-px mt-12 bg-green-300 dark:bg-green-600 transform origin-left skew-y-6"></div>
      <div className="absolute top-1/2 w-3/4 h-px mt-12 bg-red-300 dark:bg-red-600 transform origin-left skew-y-6"></div>
    </div>
  );
};

export default EnergyDataChartSkeleton;

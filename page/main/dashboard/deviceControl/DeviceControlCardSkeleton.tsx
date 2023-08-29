import { FC } from "react";

const DeviceControlCardSkeleton: FC = () => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 animate-pulse">
      <div className="flex justify-between">
        <div className="w-8 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
      </div>
      <div className="mt-4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  );
};

export default DeviceControlCardSkeleton;

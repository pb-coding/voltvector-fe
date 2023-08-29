import { FC } from "react";

const SmartHomeDevicesTableHeader: FC = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Device Name
        </th>
        <th scope="col" className="px-6 py-3">
          Device Type
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Online Status
        </th>
        <th scope="col" className="px-6 py-3">
          ID
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Add to Dashboard
        </th>
      </tr>
    </thead>
  );
};

export default SmartHomeDevicesTableHeader;

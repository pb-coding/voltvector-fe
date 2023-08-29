import { FC } from "react";

import SmartHomeDevicesTableHeader from "@/page/main/smarthome/tables/SmartHomeDevicesTableHeader";
import SmartHomeDevicesTableBody from "@/page/main/smarthome/tables/SmartHomeDevicesTableBody";

type SmartHomeDevicesTableProps = {
  provider: string;
  saved: boolean;
  authorized: boolean;
};

const SmartHomeDevicesTable: FC<SmartHomeDevicesTableProps> = ({
  provider,
  saved,
  authorized,
}) => {
  const active = saved && authorized;

  return (
    <div className="relative mb-4 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          {provider}
          {!active && (
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Visit the Smart Home Settings to enable devices from this
              provider.
            </p>
          )}
        </caption>
        {active && (
          <>
            <SmartHomeDevicesTableHeader />
            <SmartHomeDevicesTableBody provider={provider} active={active} />
          </>
        )}
      </table>
    </div>
  );
};

export default SmartHomeDevicesTable;

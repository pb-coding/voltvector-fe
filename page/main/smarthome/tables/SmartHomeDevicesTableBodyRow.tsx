import { FC } from "react";

import {
  SmartHomeDevicesData,
  SmartHomeDeviceListData,
} from "@/page/main/smarthome/types";
import OnlineStatusIndicator from "@/global/indicators/OnlineStatusIndicator";
import { useDeviceList } from "@/page/main/smarthome/hooks/useDeviceList";

type SmartHomeDevicesTableBodyRowProps = {
  device: SmartHomeDevicesData;
  deviceList: SmartHomeDeviceListData[];
  provider: string;
  refetchPairedDevices: () => void;
  refetchDeviceList: () => void;
};

const SmartHomeDevicesTableBodyRow: FC<SmartHomeDevicesTableBodyRowProps> = ({
  device,
  deviceList,
  provider,
  refetchPairedDevices,
  refetchDeviceList,
}) => {
  const deviceIsOnline = device.onlineStatus === 1 ? true : false;
  const deviceIsInDeviceList = deviceList.some(
    (deviceListItem) => deviceListItem.deviceId === device.uuid
  );

  const { addDeviceToList, deleteDeviceFromList } = useDeviceList();

  const deleteDeviceFromDeviceList = async (uuid: string) => {
    await deleteDeviceFromList(uuid);
    refetchPairedDevices();
    refetchDeviceList();
  };

  const addDeviceToDeviceList = async (provider: string, uuid: string) => {
    await addDeviceToList(provider, uuid);
    refetchPairedDevices();
    refetchDeviceList();
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {device.devName}
      </th>
      <td className="px-6 py-4">{device.deviceType}</td>
      <td className="px-6 py-4 flex justify-center">
        <OnlineStatusIndicator isOnline={deviceIsOnline} />
      </td>
      <td className="px-6 py-4">{device.uuid}</td>
      <td className="px-6 py-4 text-center">
        {deviceIsInDeviceList ? (
          <a
            onClick={() => deleteDeviceFromDeviceList(device.uuid)}
            className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
          >
            Remove
          </a>
        ) : (
          deviceIsOnline && (
            <a
              onClick={() => addDeviceToDeviceList(provider, device.uuid)}
              className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
            >
              Add
            </a>
          )
        )}
      </td>
    </tr>
  );
};

export default SmartHomeDevicesTableBodyRow;

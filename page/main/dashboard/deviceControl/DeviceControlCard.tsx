import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import {
  SmartHomeDeviceListData,
  MerossDeviceData,
} from "../../smarthome/types";
import { useFetch } from "@/global/hooks/useFetch";
import { MEROSS_DEVICE_PATH } from "@/global/routes/apiRoutes";
import LargeToggle from "@/global/toggles/LargeToggle";
import { useDeviceController } from "@/page/main/dashboard/deviceControl/hooks/useDeviceController";
import DeviceControlCardSkeleton from "@/page/main/dashboard/deviceControl/DeviceControlCardSkeleton";
import AngleDownIcon from "@/global/icons/AngleDownIcon";
import AngleUpIcon from "@/global/icons/AngleUpIcon";
import Badge from "@/global/badges/Badge";
import DeviceEnergyChart from "./chart/DeviceEnergyChart";

type DeviceControlCardProps = {
  device: SmartHomeDeviceListData;
};

const DeviceControlCard: FC<DeviceControlCardProps> = ({ device }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // TODO: when adding more providers, add more paths here
  const DEVICE_PATH = device.provider === "MEROSS" ? MEROSS_DEVICE_PATH : "";
  const deviceSpecificPath = `${DEVICE_PATH}/${device.deviceId}`;

  const {
    loading: fetchDeviceInfoLoading,
    data: deviceInfo,
    refetch: refetchDeviceInfo,
  } = useFetch<MerossDeviceData>(deviceSpecificPath); // TODO: in the future: dynamicly apply type based on provider

  const { toggleDeviceState } = useDeviceController(device.deviceId);

  if (fetchDeviceInfoLoading) {
    return <DeviceControlCardSkeleton />;
  }

  if (!deviceInfo) {
    return <div></div>; // TODO: some message
  }

  const deviceIsTurnedOn = deviceInfo.toggleStatus === 1 ? true : false;

  const deviceWatts = deviceInfo.electricity.electricity.power / 1000;
  const deviceVoltage = deviceInfo.electricity.electricity.voltage / 10;
  const deviceCurrent = deviceInfo.electricity.electricity.current / 10000;

  const toggleDevice = () => {
    toggleDeviceState(deviceIsTurnedOn ? "off" : "on");
    refetchDeviceInfo();
  };

  return (
    <div
      className={twMerge(
        "p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
        isExpanded && "col-span-2"
      )}
    >
      <div className="flex justify-between">
        <p className="font-bold">
          {deviceInfo.toggleStatus === 1 ? "ON" : "OFF"}
        </p>
        <LargeToggle
          isOn={deviceIsTurnedOn}
          onToggleFn={() => toggleDevice()}
        />
      </div>
      {isExpanded && (
        <div>
          <div className="mt-4 flex items-start">
            <p>
              <Badge text={deviceWatts.toString() + " Watt"} color="indigo" />
            </p>
            <p>
              <Badge text={deviceVoltage.toString() + " Volt"} color="purple" />
            </p>
            <p>
              <Badge text={deviceCurrent.toString() + " Ampere"} color="pink" />
            </p>
          </div>
          <DeviceEnergyChart energyData={deviceInfo.powerHistory} />
        </div>
      )}
      <div className="flex items-center justify-between mt-4">
        <p
          className={twMerge(
            "font-medium text-gray-700 dark:text-gray-400",
            isExpanded && "text-lg"
          )}
        >
          {deviceInfo.name}
        </p>
        <button onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? (
            <AngleUpIcon className="w-4 h-4 font-bold" />
          ) : (
            <AngleDownIcon className="w-4 h-4 font-bold" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DeviceControlCard;

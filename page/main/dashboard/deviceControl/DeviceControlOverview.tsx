"use client";

import { FC } from "react";

import { SmartHomeDeviceListData } from "@/page/main/smarthome/types";
import { DEVICELIST_PATH } from "@/global/routes/apiRoutes";
import { useFetch } from "@/global/hooks/useFetch";
import DeviceControlCard from "@/page/main/dashboard/deviceControl/DeviceControlCard";

const DeviceControlOverview: FC = () => {
  const { loading: fetchDevicelistLoading, data: deviceList } =
    useFetch<SmartHomeDeviceListData[]>(DEVICELIST_PATH);

  if (fetchDevicelistLoading) {
    return <div>loading..</div>;
  }

  if (!deviceList) {
    return (
      <div>
        No Devices saved in your device list. Please visit the settings and add
        devices to the Dashboard.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
      {deviceList.map((device, index) => (
        <DeviceControlCard key={index} device={device} />
      ))}
    </div>
  );
};

export default DeviceControlOverview;

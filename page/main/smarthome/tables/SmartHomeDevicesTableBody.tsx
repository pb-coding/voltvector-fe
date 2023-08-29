import { FC } from "react";

import {
  SmartHomeDevicesData,
  SmartHomeDeviceListData,
} from "@/page/main/smarthome/types";
import {
  MEROSS_DEVICES_PATH,
  DEVICELIST_PATH,
} from "@/global/routes/apiRoutes";
import SmartHomeDevicesTableBodyRow from "@/page/main/smarthome/tables/SmartHomeDevicesTableBodyRow";
import { useFetch } from "@/global/hooks/useFetch";

type SmartHomeDevicesTableBodyProps = {
  provider: string;
  active: boolean;
};

const SmartHomeDevicesTableBody: FC<SmartHomeDevicesTableBodyProps> = ({
  provider,
  active,
}) => {
  // TODO: when adding more providers, add more paths here
  const DEVICES_PATH = provider === "MEROSS" ? MEROSS_DEVICES_PATH : "";

  const {
    loading: fetchPairedDevicesLoading,
    data: pairedDevices,
    refetch: refetchPairedDevices,
  } = useFetch<SmartHomeDevicesData[]>(DEVICES_PATH, active);

  const {
    loading: fetchDevicelistLoading,
    data: deviceList,
    refetch: refetchDeviceList,
  } = useFetch<SmartHomeDeviceListData[]>(DEVICELIST_PATH);

  if (fetchPairedDevicesLoading || fetchDevicelistLoading) {
    return <div>loading..</div>;
  }

  if (!pairedDevices || !deviceList) {
    return <div>no devices</div>;
  }

  return (
    <tbody>
      {pairedDevices?.map((device, index) => (
        <SmartHomeDevicesTableBodyRow
          key={index}
          device={device}
          deviceList={deviceList}
          provider={provider}
          refetchPairedDevices={refetchDeviceList}
          refetchDeviceList={refetchPairedDevices}
        />
      ))}
    </tbody>
  );
};

export default SmartHomeDevicesTableBody;

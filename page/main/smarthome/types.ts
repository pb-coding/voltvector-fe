export type SmartHomeDevicesData = {
  uuid: string;
  devName: string;
  deviceType: string;
  onlineStatus: number;
};

export type SmartHomeDeviceListData = {
  id: number;
  userId: number;
  provider: string;
  deviceId: string;
  createdAt: string;
  updatedAt: string;
};

export type MerossDevicePowerHistoryData = {
  consumptionx: Array<{
    date: string;
    time: number;
    value: number;
  }>;
};

export type MerossCurrentElectricityData = {
  electricity: {
    channel: number;
    current: number;
    voltage: number;
    power: number;
    config: {
      voltageRatio: number;
      electricityRatio: number;
      maxElectricityCurrent: number;
    };
  };
};

export type MerossDeviceData = {
  id: number;
  name: string;
  onlineStatus: number;
  deviceType: string;
  toggleStatus: number;
  powerHistory: MerossDevicePowerHistoryData;
  electricity: MerossCurrentElectricityData;
};

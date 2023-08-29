import { useMutation } from "@/global/hooks/useMutation";
import {
  MEROSS_DEVICE_PATH,
  SMART_HOME_PROVIDER_PATH,
} from "@/global/routes/apiRoutes";

type ToggleDeviceResponse = {
  status: number;
  data: {
    uuid: string;
    state: string;
  };
};

type ToggleDevicePayload = {
  set: "on" | "off";
};

// TODO: for now this is MEROSS specific, but it should be abstracted to more providers in the future
export const useDeviceController = (deviceId: string) => {
  const { mutate: toggleDevice, loading: toggleDeviceLoading } = useMutation<
    ToggleDeviceResponse,
    ToggleDevicePayload
  >(MEROSS_DEVICE_PATH + "/" + deviceId, "put");

  const toggleDeviceState = async (set: "on" | "off") => {
    const payload = { set };

    try {
      const response = await toggleDevice({
        payload: payload as ToggleDevicePayload,
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { toggleDeviceState, toggleDeviceLoading };
};

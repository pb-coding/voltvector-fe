import { SmartHomeDeviceListData } from "@/page/main/smarthome/types";
import { useMutation } from "@/global/hooks/useMutation";
import { DEVICELIST_PATH } from "@/global/routes/apiRoutes";
import { useAlert } from "@/global/hooks/useAlert";

type DeleteDeviceResponse = {
  status: number;
  data: {
    message: string;
  };
};

type DeleteDevicePayload = {
  deviceId: string;
};

type AddDeviceToListResponse = {
  status: number;
  data: SmartHomeDeviceListData;
};

type AddDeviceToListPayload = {
  provider: string;
  deviceId: string;
};

export const useDeviceList = () => {
  const { setAlert } = useAlert();

  const {
    mutate: addDeviceToListMutation,
    loading: addDeviceToListLoadingState,
  } = useMutation<AddDeviceToListResponse, AddDeviceToListPayload>(
    DEVICELIST_PATH,
    "post"
  );

  const { mutate: deleteDeviceMutation, loading: deleteDeviceLoadingState } =
    useMutation<DeleteDeviceResponse, DeleteDevicePayload>(
      DEVICELIST_PATH,
      "delete"
    );

  const addDeviceToList = async (provider: string, deviceId: string) => {
    const payload = { provider, deviceId };

    try {
      const response = await addDeviceToListMutation({
        payload: payload as AddDeviceToListPayload,
      });

      if (response) {
        setAlert({
          message: `Added device ${response.data.deviceId} to device list`,
          status: response.status,
          error: false,
        });

        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDeviceFromList = async (deviceId: string) => {
    const payload = { deviceId };

    try {
      const response = await deleteDeviceMutation({
        payload: payload as DeleteDevicePayload,
      });

      if (response) {
        setAlert({
          message: response.data.message,
          status: response.status,
          error: false,
        });

        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addDeviceToList,
    addDeviceToListLoadingState,
    deleteDeviceFromList,
    deleteDeviceLoadingState,
  };
};

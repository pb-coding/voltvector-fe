import { useMutation } from "@/global/hooks/useMutation";
import { SMART_HOME_PROVIDER_PATH } from "@/global/routes/apiRoutes";
import { useAlert } from "@/global/hooks/useAlert";
import { useProviderAuth } from "../../hooks/useProviderAuth";

type DeleteProviderResponse = {
  status: number;
  data: {
    message: string;
  };
};

type DeleteProviderPayload = {
  provider: string;
};

export const useDeleteProviderAuth = () => {
  const { setAlert } = useAlert();
  const { refetchProviders } = useProviderAuth();
  const {
    mutate: deleteProviderMutation,
    loading: deleteProviderLoadingState,
  } = useMutation<DeleteProviderResponse, DeleteProviderPayload>(
    SMART_HOME_PROVIDER_PATH,
    "delete"
  );

  const deleteProvider = async (
    setIsAddProviderAuthDialogOpen: (isOpenBoolean: boolean) => void,
    provider: string
  ) => {
    const payload = { provider };

    try {
      const response = await deleteProviderMutation({
        payload: payload as DeleteProviderPayload,
      });

      if (response) {
        setAlert({
          message: response.data.message,
          status: response.status,
          error: false,
        });

        refetchProviders();
        setIsAddProviderAuthDialogOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    deleteProvider,
    deleteProviderLoadingState,
  };
};

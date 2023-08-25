import { useState } from "react";

import { useMutation } from "@/global/hooks/useMutation";
import { SMART_HOME_PROVIDER_PATH } from "@/global/routes/apiRoutes";
import { useAlert } from "@/global/hooks/useAlert";
import { useProviderAuth } from "../../hooks/useProviderAuth";

type AddProviderResponse = {
  status: number;
  data: {
    message: string;
  };
};

type AddProviderPayload = {
  email: string;
  password: string;
  provider: string;
};

export const useAddProviderAuth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { refetchProviders } = useProviderAuth();

  const { setAlert } = useAlert();
  const { mutate: addProviderMutation, loading: addProviderLoadingState } =
    useMutation<AddProviderResponse, AddProviderPayload>(
      SMART_HOME_PROVIDER_PATH,
      "post"
    );

  const addProvider = async (
    setIsAddProviderAuthDialogOpen: (isOpenBoolean: boolean) => void,
    provider: string
  ) => {
    if (password !== confirmPassword) {
      setAlert({
        message: "Passwords do not match",
        status: 400,
        error: true,
      });

      return;
    }

    const payload = { email, password, provider };

    try {
      const response = await addProviderMutation({
        payload: payload as AddProviderPayload,
      });

      if (response) {
        setAlert({
          message: response.data.message,
          status: response.status,
          error: false,
        });

        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setIsAddProviderAuthDialogOpen(false);
        refetchProviders();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    addProvider,
    addProviderLoadingState,
  };
};

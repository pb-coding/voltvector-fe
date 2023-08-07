import { useState, useContext } from "react";

import { useMutation } from "@/global/hooks/useMutation";
import { USER_PATH } from "@/global/routes/apiRoutes";
import { useAlert } from "@/global/hooks/useAlert";
import { ManageUsersContext } from "@/page/main/admin/users/ManageUsersProvider";

type CreateUserResponse = {
  status: number;
  data: {
    message: string;
  };
};

type CreateUserPayload = {
  email: string;
  name: string;
  password: string;
};

export const useCreateUser = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { refetchUsers } = useContext(ManageUsersContext);
  const { setAlert } = useAlert();
  const { mutate: createMutation, loading: createUserLoadingState } =
    useMutation<CreateUserResponse, CreateUserPayload>(USER_PATH, "post");

  const createUser = async (
    setIsCreateUserDialogOpen: (isOpenBoolean: boolean) => void
  ) => {
    if (password !== confirmPassword) {
      setAlert({
        message: "Passwords do not match",
        status: 400,
        error: true,
      });
      // Clear fields?
      return;
    }
    // TODO: add validation here
    const payload = { email, name, password };

    try {
      const response = await createMutation(payload);
      console.log(response);
      if (response) {
        setAlert({
          message: response.data.message,
          status: response.status,
          error: false,
        });
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsCreateUserDialogOpen(false);
        refetchUsers();
      }
    } catch (error) {
      console.error("Error creating users", error);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    createUser,
    createUserLoadingState,
  };
};

import { useState, useContext } from "react";

import { useMutation } from "@/global/hooks/useMutation";
import { USER_PATH } from "@/global/routes/apiRoutes";
import { useAlert } from "@/global/hooks/useAlert";
import { ManageUsersContext } from "@/page/main/admin/users/ManageUsersProvider";
import { UserType } from "../../types";

type EditUserResponse = {
  status: number;
  data: {
    message: string;
  };
};

type EditUserPayload = {
  email: string;
  name: string;
  password?: string;
};

export const useEditUser = (user: UserType) => {
  const [name, setName] = useState<UserType["name"]>(user.name);
  const [email, setEmail] = useState<UserType["email"]>(user.email);
  const [isPasswordChange, setIsPasswordChange] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { refetchUsers } = useContext(ManageUsersContext);
  const { setAlert } = useAlert();
  const { mutate: editMutation, loading: editUserLoadingState } = useMutation<
    EditUserResponse,
    EditUserPayload
  >(USER_PATH, "put");

  const editUser = async (
    setIdOfOpenEditUserDialog: (setIdOfOpenEditUserDialog: number) => void
  ) => {
    if (isPasswordChange && password !== confirmPassword) {
      setAlert({
        message: "Passwords do not match",
        status: 400,
        error: true,
      });
      // TODO: check that password is not empty
      return;
    }
    // TODO: add validation here
    const payload = isPasswordChange
      ? { email, name, password }
      : { email, name };

    try {
      const response = await editMutation({
        pathVariable: user.id,
        payload,
      });
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
        setIdOfOpenEditUserDialog(0);
        refetchUsers();
      }
    } catch (error) {
      console.error("Error editing user", error);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    isPasswordChange,
    setIsPasswordChange,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    editUser,
    editUserLoadingState,
  };
};

import { useContext } from "react";

import { useMutation } from "@/global/hooks/useMutation";
import { USER_PATH } from "@/global/routes/apiRoutes";
import { ManageUsersContext } from "@/page/main/admin/users/ManageUsersProvider";
import { useAlert } from "@/global/hooks/useAlert";

type DeleteUserResponse = {
  status: number;
  data: {
    count: number;
  };
};

type DeleteUserPayload = {
  userIds: number[];
};

export const useDeleteUsers = () => {
  const { checkedUsers, setCheckedUsers, refetchUsers } =
    useContext(ManageUsersContext);

  const { mutate: deleteMutation, loading: deleteUsersLoadingState } =
    useMutation<DeleteUserResponse, DeleteUserPayload>(USER_PATH, "delete");

  const { setAlert } = useAlert();

  const deleteSelectedUsers = async () => {
    if (checkedUsers.length === 0) return;

    const payload: DeleteUserPayload = {
      userIds: checkedUsers.map((user) => user.id),
    };

    try {
      const response = await deleteMutation({ payload });
      console.log(response);
      if (response) {
        const deletedUsersCount = response.data.count;
        setAlert({
          message: deletedUsersCount + " users deleted",
          status: response.status,
          error: deletedUsersCount === 0 ? true : false,
        });
        setCheckedUsers([]);

        refetchUsers();
      }
    } catch (error) {
      console.error("Error deleting users", error);
    }
  };

  return { deleteSelectedUsers, deleteUsersLoadingState };
};

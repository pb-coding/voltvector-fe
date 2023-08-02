import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { UserType } from "@/page/main/admin/users/types";
import { useFetch } from "@/global/hooks/useFetch";
import { useMutation } from "@/global/hooks/useMutation";
import { USER_PATH } from "@/global/apiRoutes";
import LoadingSpinner from "@/global/loading/LoadingSpinner";

type ManageUsersContextType = {
  checkedUsers: UserType[];
  setCheckedUsers: Dispatch<SetStateAction<UserType[]>>;
  displayedUsers?: UserType[];
  setSearchTerm: Dispatch<SetStateAction<string>>;
  deleteSelectedUsers: () => void;
};

export const ManageUsersContext = createContext<ManageUsersContextType>({
  checkedUsers: [],
  setCheckedUsers: () => [],
  displayedUsers: [],
  setSearchTerm: () => {},
  deleteSelectedUsers: () => {},
});

type MangeUsersProviderProps = {
  children: ReactNode;
};

const MangeUsersProvider: FC<MangeUsersProviderProps> = ({ children }) => {
  const [checkedUsers, setCheckedUsers] = useState<UserType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    loading: fetchLoading,
    data: users,
    refetch,
  } = useFetch<Array<UserType> | null>(USER_PATH);

  const { mutate: deleteMutation, loading: deleteLoading } = useMutation(
    USER_PATH,
    "delete"
  );

  const deleteSelectedUsers = async () => {
    if (checkedUsers.length === 0) return;

    const payload = { userIds: checkedUsers.map((user) => user.id) };

    try {
      await deleteMutation(payload);
      setCheckedUsers([]);

      refetch();
    } catch (error) {
      console.error("Error deleting users", error);
    }
  };

  const filterdUsers =
    users?.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  if (fetchLoading || deleteLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ManageUsersContext.Provider
      value={{
        checkedUsers,
        setCheckedUsers,
        displayedUsers: filterdUsers,
        setSearchTerm,
        deleteSelectedUsers,
      }}
    >
      {children}
    </ManageUsersContext.Provider>
  );
};

export default MangeUsersProvider;

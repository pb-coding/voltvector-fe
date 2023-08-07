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
import { useCreateUser } from "@/page/main/admin/users/createUser/hooks/useCreateUser";
import { USER_PATH } from "@/global/routes/apiRoutes";
import LoadingSpinner from "@/global/loading/LoadingSpinner";
import { useDeleteUsers } from "./action/hooks/useDeleteUsers";

type ManageUsersContextType = {
  checkedUsers: UserType[];
  setCheckedUsers: Dispatch<SetStateAction<UserType[]>>;
  displayedUsers?: UserType[];
  setSearchTerm: Dispatch<SetStateAction<string>>;
  refetchUsers: () => void;
};

export const ManageUsersContext = createContext<ManageUsersContextType>({
  checkedUsers: [],
  setCheckedUsers: () => [],
  displayedUsers: [],
  setSearchTerm: () => {},
  refetchUsers: () => {},
});

type MangeUsersProviderProps = {
  children: ReactNode;
};

const MangeUsersProvider: FC<MangeUsersProviderProps> = ({ children }) => {
  const [checkedUsers, setCheckedUsers] = useState<UserType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // check if this impacts performance negatively
  const { createUserLoadingState } = useCreateUser();
  const { deleteUsersLoadingState } = useDeleteUsers();

  const {
    loading: fetchLoading,
    data: users,
    refetch,
  } = useFetch<Array<UserType> | null>(USER_PATH);

  const filterdUsers =
    users?.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  if (fetchLoading || deleteUsersLoadingState || createUserLoadingState) {
    return <LoadingSpinner size="sm" />;
  }

  return (
    <ManageUsersContext.Provider
      value={{
        checkedUsers,
        setCheckedUsers,
        displayedUsers: filterdUsers,
        setSearchTerm,
        refetchUsers: refetch,
      }}
    >
      {children}
    </ManageUsersContext.Provider>
  );
};

export default MangeUsersProvider;

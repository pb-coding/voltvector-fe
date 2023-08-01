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
import { USER_PATH } from "@/global/apiRoutes";
import LoadingSpinner from "@/global/loading/LoadingSpinner";

type ManageUsersContextType = {
  checkedUsers: UserType[];
  setCheckedUsers: Dispatch<SetStateAction<UserType[]>>;
  displayedUsers?: UserType[];
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const ManageUsersContext = createContext<ManageUsersContextType>({
  checkedUsers: [],
  setCheckedUsers: () => [],
  displayedUsers: [],
  setSearchTerm: () => {},
});

type MangeUsersProviderProps = {
  children: ReactNode;
};

const MangeUsersProvider: FC<MangeUsersProviderProps> = ({ children }) => {
  const [checkedUsers, setCheckedUsers] = useState<UserType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { loading, data: users } = useFetch<Array<UserType> | null>(USER_PATH);

  const filterdUsers =
    users?.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ManageUsersContext.Provider
      value={{
        checkedUsers,
        setCheckedUsers,
        displayedUsers: filterdUsers,
        setSearchTerm,
      }}
    >
      {children}
    </ManageUsersContext.Provider>
  );
};

export default MangeUsersProvider;

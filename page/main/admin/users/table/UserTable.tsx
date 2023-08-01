import { FC } from "react";
import { UserType } from "@/page/main/admin/users/types";
import UserTableHead from "@/page/main/admin/users/table/UserTableHead";
import UserTableBody from "@/page/main/admin/users/table/UserTableBody";

const UserTable: FC = () => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <UserTableHead />
      <UserTableBody />
    </table>
  );
};

export default UserTable;

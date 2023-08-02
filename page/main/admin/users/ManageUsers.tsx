"use client";

import { FC } from "react";

import ActionButtonDropdown from "./action/ActionButtonDropdown";
import UserSearch from "./UserSearch";
import UserTable from "@/page/main/admin/users/table/UserTable";
import ManageUsersProvider from "./ManageUsersProvider";
import CreateUserButton from "./createUser/CreateUserButton";

const ManageUsers: FC = () => {
  return (
    <section>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <ManageUsersProvider>
          <div className="flex flex-wrap items-center justify-between pb-4">
            <div className="flex space-x-4">
              <ActionButtonDropdown />
              <CreateUserButton />
            </div>
            <UserSearch />
          </div>
          <UserTable />
        </ManageUsersProvider>
      </div>
    </section>
  );
};

export default ManageUsers;

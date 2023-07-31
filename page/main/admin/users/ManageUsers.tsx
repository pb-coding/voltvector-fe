"use client";

import { FC } from "react";

import { useFetch } from "@/global/hooks/useFetch";
import { USER_PATH } from "@/global/apiRoutes";
import LoadingSpinner from "@/global/loading/LoadingSpinner";
import ActionButton from "./ActionButton";
import UserSearch from "./UserSearch";
import UserTable from "@/page/main/admin/users/table/UserTable";
import { UserType } from "@/page/main/admin/users/types";

const ManageUsers: FC = () => {
  const { loading, data: users } = useFetch<Array<UserType> | null>(USER_PATH);

  if (loading) return <LoadingSpinner />;

  if (!users) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4">
          <ActionButton />
          <UserSearch />
        </div>
        <UserTable users={users} />
      </div>
    </section>
  );
};

export default ManageUsers;

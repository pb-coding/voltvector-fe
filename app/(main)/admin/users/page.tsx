import { FC } from "react";

import ManageUsers from "@/page/main/admin/users/ManageUsers";

const ManageUsersPage: FC = () => {
  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <ManageUsers />
    </main>
  );
};
export default ManageUsersPage;

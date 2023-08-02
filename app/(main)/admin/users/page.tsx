import { FC } from "react";

import ManageUsers from "@/page/main/admin/users/ManageUsers";
import ProtectedRoute from "@/global/auth/ProtectedRoute";
import { Role } from "@/global/auth/types";

const ManageUsersPage: FC = () => {
  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <ManageUsers />
    </main>
  );
};
export default ManageUsersPage;

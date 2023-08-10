"use client";

import { FC } from "react";

import { Role } from "@/global/auth/types";
import UserSidebarLinks from "@/page/main/navigation/sidebar/UserSidebarLinks";
import AdminSidebarLinks from "@/page/main/navigation/sidebar/AdminSidebarLinks";
import { useHasRole } from "@/global/auth/hooks/useHasRole";
import LoadingSpinner from "@/global/loading/LoadingSpinner";

type SidebarProps = {
  isSidebarOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen }) => {
  const isUser = useHasRole(Role.USER);
  const isAdmin = useHasRole(Role.ADMIN);

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform md:translate-x-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
        isSidebarOpen ? "" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
      aria-hidden
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        {isUser && <UserSidebarLinks />}
        {isAdmin && <AdminSidebarLinks />}
        {!isUser && !isAdmin && <LoadingSpinner size="sm" />}
      </div>
    </aside>
  );
};

export default Sidebar;

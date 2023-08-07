"use client";

import { FC } from "react";

import { Role } from "@/global/auth/types";
import UserSidebarLinks from "@/page/main/sidebar/UserSidebarLinks";
import AdminSidebarLinks from "@/page/main/sidebar/AdminSidebarLinks";
import { useHasRole } from "@/global/auth/hooks/useHasRole";
import LoadingSpinner from "@/global/loading/LoadingSpinner";

// TODO: conditionally rendering sidebar elements & extracting into separate components

const Sidebar: FC = () => {
  const isUser = useHasRole(Role.USER);
  const isAdmin = useHasRole(Role.ADMIN);

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
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

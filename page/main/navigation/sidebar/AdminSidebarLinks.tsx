import { FC } from "react";
import Link from "next/link";
import UsersIcon from "@/global/icons/UsersIcon";

const AdminSidebarLinks: FC = () => {
  return (
    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
      <li>
        <Link
          href="/admin/users"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <UsersIcon />
          <span className="flex-1 ml-3 whitespace-nowrap">Manage Users</span>
        </Link>
      </li>
    </ul>
  );
};

export default AdminSidebarLinks;

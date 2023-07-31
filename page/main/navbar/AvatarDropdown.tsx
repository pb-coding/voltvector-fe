"use client";

import { FC } from "react";
import Link from "next/link";

import { useLogout } from "@/global/auth/hooks/useLogout";
import { useUserAuth } from "@/global/auth/hooks/useUserAuth";

const AvatarDropdown: FC = () => {
  const handleLogout = useLogout();
  const { userAuth } = useUserAuth();

  return (
    <div
      className="absolute right-0 mt-2 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
      // id="dropdown-user"
    >
      <div className="px-4 py-3" role="none">
        <p className="text-sm text-gray-900 dark:text-white" role="none">
          {userAuth?.name}
        </p>
        <p
          className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
          role="none"
        >
          {userAuth?.email}
        </p>
      </div>
      <ul className="py-1" role="none">
        <li>
          <Link
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            Settings
          </Link>
        </li>
        <li>
          <a
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
            role="menuitem"
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AvatarDropdown;

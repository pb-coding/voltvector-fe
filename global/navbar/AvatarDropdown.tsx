"use client";

import { FC } from "react";

import { useLogout } from "@/global/auth/hooks/useLogout";
import { useAuth } from "@/global/auth/hooks/useAuth";

const AvatarDropdown: FC = () => {
  const handleLogout = useLogout();
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div
      className="absolute right-0 mt-2 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
      // id="dropdown-user"
    >
      <div className="px-4 py-3" role="none">
        <p className="text-sm text-gray-900 dark:text-white" role="none">
          Philipp Beckmann
        </p>
        <p
          className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
          role="none"
        >
          pb1497@googlemail.com
        </p>
      </div>
      <ul className="py-1" role="none">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
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

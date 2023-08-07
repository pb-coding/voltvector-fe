import { FC } from "react";
import Link from "next/link";

import HomeIcon from "../../../global/icons/HomeIcon";
import SunIcon from "../../../global/icons/SunIcon";
import SettingsIcon from "../../../global/icons/SettingsIcon";
import PieDiagramIcon from "../../../global/icons/PieDiagramIcon";
import { DASHBOARD_PATH } from "@/global/routes/routes";

const UserSidebarLinks: FC = () => {
  return (
    <ul className="space-y-2 font-medium">
      <li>
        <Link
          href={DASHBOARD_PATH}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <PieDiagramIcon />
          <span className="ml-3">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          href="/settings"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <SettingsIcon />
          <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <SunIcon />
          <span className="flex-1 ml-3 whitespace-nowrap">Solar Systems</span>
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <HomeIcon />
          <span className="flex-1 ml-3 whitespace-nowrap">
            Smart Home Devices
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default UserSidebarLinks;

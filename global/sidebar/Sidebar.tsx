import { FC } from "react";
import Link from "next/link";
import HomeIcon from "../icons/HomeIcon";
import SunIcon from "../icons/SunIcon";
import SettingsIcon from "../icons/SettingsIcon";
import PieDiagramIcon from "../icons/PieDiagramIcon";

// TODO: conditionally rendering sidebar elements & extracting into separate components

const Sidebar: FC = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
      aria-hidden
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
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
              <span className="flex-1 ml-3 whitespace-nowrap">
                Solar Systems
              </span>
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
      </div>
    </aside>
  );
};

export default Sidebar;

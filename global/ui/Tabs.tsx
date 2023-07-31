import { FC } from "react";
import Link from "next/link";

type TabType = {
  name: string;
  link: string;
};

type TabsProps = {
  tabs: TabType[];
  currentTab: string;
};

const Tabs: FC<TabsProps> = ({ tabs, currentTab }) => {
  // TODO: make mobile tabs dynamic

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a settings tab
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Enphase Authorization</option>
          <option>Meross Authorization</option>
          <option>Account</option>
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 mb-4">
        {tabs.map((tab, index) => (
          <li key={tab.name} className="w-full">
            <Link
              href={tab.link}
              className={`inline-block w-full p-4 ${
                index === 0
                  ? "rounded-l-lg"
                  : index === tabs.length - 1
                  ? "rounded-r-lg"
                  : ""
              } ${
                tab.name === currentTab
                  ? "text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                  : "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              aria-current={tab.name === currentTab ? "page" : undefined}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Tabs;

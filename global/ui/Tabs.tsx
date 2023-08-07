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
      <ul className="flex flex-col space-y-2 text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex sm:flex-row sm:space-y-0 dark:divide-gray-700 dark:text-gray-400 mb-4">
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

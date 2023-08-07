import { FC } from "react";
import LockIcon from "../icons/LockIcon";

const Forbidden: FC = () => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <LockIcon className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3 items-center mx-auto" />
      <a href="#">
        <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Forbidden (403)
        </h5>
      </a>
      <p className="mb-3 text-center font-normal text-gray-500 dark:text-gray-400">
        You don&apos;t have permission to access this page.
      </p>
    </div>
  );
};

export default Forbidden;

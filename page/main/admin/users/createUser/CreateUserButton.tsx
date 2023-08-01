import CreateUserIcon from "@/global/icons/CreateUserIcon";
import { FC } from "react";

const CreateUserButton: FC = () => {
  const openCreateUserDialog = () => {
    console.log("create user");
  };

  return (
    <div className="flex-shrink-0">
      <button
        onClick={openCreateUserDialog}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        <span className="sr-only">Action button</span>
        Create User
        <CreateUserIcon />
      </button>
    </div>
  );
};

export default CreateUserButton;

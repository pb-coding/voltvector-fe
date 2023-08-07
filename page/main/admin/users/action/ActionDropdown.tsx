import { FC } from "react";

import { useDeleteUsers } from "@/page/main/admin/users/action/hooks/useDeleteUsers";

const ActionDropdown: FC = () => {
  const { deleteSelectedUsers } = useDeleteUsers();

  return (
    <div className="absolute left-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 border border-red-600 dark:bg-gray-700 dark:divide-gray-600">
      <div className="py-1">
        <button
          onClick={deleteSelectedUsers}
          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-600 dark:hover:text-red-500"
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

export default ActionDropdown;

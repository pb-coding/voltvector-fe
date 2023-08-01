import { FC, useContext } from "react";
import Avatar from "@/global/ui/Avatar";
import { UserType } from "@/page/main/admin/users/types";
import { ManageUsersContext } from "@/page/main/admin/users/ManageUsersProvider";

const UserTableBody: FC = () => {
  const { displayedUsers, checkedUsers, setCheckedUsers } =
    useContext(ManageUsersContext);

  const handleCheckboxChange = (user: UserType) => {
    if (checkedUsers.includes(user)) {
      setCheckedUsers(
        checkedUsers.filter((checkedUser) => checkedUser !== user)
      );
    } else {
      setCheckedUsers([...checkedUsers, user]);
    }
  };

  return (
    <tbody>
      {displayedUsers?.map((user) => (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          key={user.id}
        >
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                checked={checkedUsers.includes(user)}
                onChange={() => handleCheckboxChange(user)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label htmlFor="checkbox-table-search-1" className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <th
            scope="row"
            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <Avatar initials={user.name.charAt(0) ?? ""} />
            <div className="pl-3">
              <div className="text-base font-semibold">{user.name}</div>
              <div className="font-normal text-gray-500">{user.email}</div>
            </div>
          </th>
          <td className="px-6 py-4">
            {user.roles.map((role) => (
              <p key={role.id}>{role.role}</p>
            ))}
          </td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit user
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserTableBody;

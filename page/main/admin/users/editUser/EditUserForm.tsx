"use client";

import { FC, FormEvent } from "react";

import { useEditUser } from "@/page/main/admin/users/editUser/hooks/useEditUser";
import { UserType } from "@/page/main/admin/users/types";

type CreateUserFormProps = {
  setIdOfOpenDialog: (idOfOpenDialog: number) => void;
  user: UserType;
};

const EditUserForm: FC<CreateUserFormProps> = ({ setIdOfOpenDialog, user }) => {
  const {
    name,
    setName,
    email,
    setEmail,
    isPasswordChange,
    setIsPasswordChange,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    editUser,
  } = useEditUser(user);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editUser(setIdOfOpenDialog);
  };

  const passwordLabelVisibilityClasses = isPasswordChange
    ? "text-gray-900 dark:text-white"
    : "text-gray-300 dark:text-gray-500";

  const passwordInputVisibilityClasses = isPasswordChange
    ? "bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    : "cursor-not-allowed bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white";

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-span-2 flex items-center mt-2">
          <input
            type="checkbox"
            id="is_password_change"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={isPasswordChange}
            onChange={() => setIsPasswordChange(!isPasswordChange)}
          ></input>
          <label
            htmlFor="is_password_change"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Change password
          </label>
        </div>
        <div>
          <label
            htmlFor="password"
            className={`block mb-2 text-sm font-medium ${passwordLabelVisibilityClasses}`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${passwordInputVisibilityClasses}`}
            placeholder="•••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!isPasswordChange}
            required={isPasswordChange}
          ></input>
        </div>
        <div>
          <label
            htmlFor="confirm_password"
            className={`block mb-2 text-sm font-medium ${passwordLabelVisibilityClasses}`}
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            className={`border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${passwordInputVisibilityClasses}`}
            placeholder="•••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={!isPasswordChange}
            required={isPasswordChange}
          ></input>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default EditUserForm;

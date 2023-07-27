import { FC, Dispatch, SetStateAction } from "react";

type AvatarButtonProps = {
  isAvatarDropdownOpen: boolean;
  setIsAvatarDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const AvatarButton: FC<AvatarButtonProps> = ({ setIsAvatarDropdownOpen }) => {
  const toggleAvatarDropdown = () => {
    setIsAvatarDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleAvatarDropdown}
        type="button"
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        aria-expanded="false"
        // data-dropdown-toggle="dropdown-user"
      >
        <span className="sr-only">Open user menu</span>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            PB
          </span>
        </div>
      </button>
    </div>
  );
};

export default AvatarButton;

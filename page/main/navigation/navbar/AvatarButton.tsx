import { FC, Dispatch, SetStateAction } from "react";

import Avatar from "@/global/ui/Avatar";
import { useUser } from "@/global/auth/hooks/useUser";

type AvatarButtonProps = {
  setIsAvatarDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const AvatarButton: FC<AvatarButtonProps> = ({ setIsAvatarDropdownOpen }) => {
  const { userData } = useUser();

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
      >
        <span className="sr-only">Open user menu</span>
        <Avatar initials={userData?.name?.charAt(0) ?? ""} />
      </button>
    </div>
  );
};

export default AvatarButton;

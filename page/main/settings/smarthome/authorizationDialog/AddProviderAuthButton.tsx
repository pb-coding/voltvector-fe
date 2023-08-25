import { FC, useState } from "react";

import LockIcon from "@/global/icons/LockIcon";
import AddProviderAuthDialog from "@/page/main/settings/smarthome/authorizationDialog/AddProviderAuthDialog";

type AddProviderAuthButtonProps = {
  text: string;
  activeButton: boolean;
  provider: string;
  isReauth: boolean;
};

const AddProviderAuthButton: FC<AddProviderAuthButtonProps> = ({
  text,
  activeButton,
  provider,
  isReauth,
}) => {
  const [isAddProviderDialogOpen, setIsAddProviderDialogOpen] = useState(false);
  const openAddProviderDialog = () => {
    console.log("open add provider dialog");
    setIsAddProviderDialogOpen(true);
  };

  return (
    <div>
      <a
        onClick={openAddProviderDialog}
        className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
          !activeButton ? "pointer-events-none" : "cursor-pointer"
        }`}
      >
        {text}
        <LockIcon />
      </a>
      {isAddProviderDialogOpen && (
        <AddProviderAuthDialog
          setIsOpen={setIsAddProviderDialogOpen}
          provider={provider}
          isReauth={isReauth}
        />
      )}
    </div>
  );
};

export default AddProviderAuthButton;

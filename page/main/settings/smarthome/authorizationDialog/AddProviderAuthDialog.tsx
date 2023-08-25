import { FC } from "react";

import AddProviderAuthForm from "@/page/main/settings/smarthome/authorizationDialog/AddProviderAuthForm";

type AddProviderAuthDialogProps = {
  setIsOpen: (isOpen: boolean) => void;
  provider: string;
  isReauth: boolean;
};

const AddProviderAuthDialog: FC<AddProviderAuthDialogProps> = ({
  setIsOpen,
  provider,
  isReauth,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow drop-shadow-md border dark:border-gray-700 dark:bg-gray-800">
          <div className="p-6 space-y-6">
            <div className="flex items-start justify-between pb-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add {provider} Account
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {isReauth && (
              <p className="text-sm text-yellow-400">
                Warning: Your previosly saved {provider} credentials will be
                deleted. Please enter your new credentials.
              </p>
            )}
            <AddProviderAuthForm setIsOpen={setIsOpen} provider={provider} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProviderAuthDialog;

import { Dispatch, FC, SetStateAction } from "react";

import ChartYAxisSettings from "@/page/main/dashboard/energyChart/navigation/settings/ChartYAxisSettings";

type ChartSettingsModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ChartSettingsModal: FC<ChartSettingsModalProps> = ({ setShowModal }) => {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-end justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Chart Settings
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setShowModal(false)}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <ChartYAxisSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSettingsModal;

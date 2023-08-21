import SettingsIcon from "@/global/icons/SettingsIcon";
import { Dispatch, FC, SetStateAction } from "react";

type ChartSettingsButtonProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ChartSettingsButton: FC<ChartSettingsButtonProps> = ({
  setShowModal,
}) => {
  return (
    <button
      className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      type="button"
      onClick={() => setShowModal((prev) => !prev)}
    >
      <SettingsIcon className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    </button>
  );
};

export default ChartSettingsButton;

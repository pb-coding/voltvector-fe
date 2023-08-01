import { FC, Dispatch, SetStateAction } from "react";

type ActionButtonProps = {
  setIsActionDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const ActionButton: FC<ActionButtonProps> = ({ setIsActionDropdownOpen }) => {
  const toggleActionDropdown = () => {
    setIsActionDropdownOpen((prev) => !prev);
  };

  return (
    <button
      onClick={toggleActionDropdown}
      className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      type="button"
    >
      <span className="sr-only">Action button</span>
      Action
      <svg
        className="w-2.5 h-2.5 ml-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
  );
};

export default ActionButton;

import { FC } from "react";

type DeleteButtonProps = {
  text: string;
  deleteFunction: () => Promise<void>;
};

const DeleteButton: FC<DeleteButtonProps> = ({ text, deleteFunction }) => {
  return (
    <button
      onClick={deleteFunction}
      type="button"
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      {text}
    </button>
  );
};

export default DeleteButton;

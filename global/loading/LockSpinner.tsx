import { FC } from "react";
import LockIcon from "@/global/icons/LockIcon";

type LockSpinnerProps = {
  size?: "sm" | "md" | "lg" | null;
};

const LockSpinner: FC<LockSpinnerProps> = ({ size }) => {
  const lockSize = size === "sm" ? "w-8 h-8" : "w-16 h-16";
  const LockSpinner = (
    <div
      className={`${lockSize} text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`}
      role="status"
    >
      <LockIcon className={`${lockSize}`} />
      <span className="sr-only">Checking Authentication...</span>
    </div>
  );

  if (size === "sm")
    return (
      <div className="flex items-center justify-center mt-10">
        {LockSpinner}
      </div>
    );

  // lg spinner that is returned by default
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        {LockSpinner}
      </div>
    </div>
  );
};

export default LockSpinner;

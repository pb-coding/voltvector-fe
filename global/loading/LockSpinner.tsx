import { FC } from "react";
import Image from "next/image";

import LockIcon from "@/global/icons/LockIcon";

type LockSpinnerProps = {
  size?: "sm" | "md" | "lg" | null;
};

const LockSpinner: FC<LockSpinnerProps> = ({ size }) => {
  const lockSize = size === "sm" ? "w-8 h-8" : "w-20 h-20";
  const LockSpinner = (
    <div
      className={`${lockSize}text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`}
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
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center">
          <div className="relative h-12 w-12">
            <Image
              src="/voltvector_logo.png"
              alt="Voltvector Logo"
              width={300}
              height={300}
            />
          </div>
          <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">
            oltVector
          </span>
        </div>
        <div className="flex items-center justify-center mt-10">
          {LockSpinner}
        </div>
      </div>
    </div>
  );
};

export default LockSpinner;

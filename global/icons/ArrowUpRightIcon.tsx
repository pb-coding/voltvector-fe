import { FC } from "react";

import { IconProps } from "./types";

const ArrowUpRightIcon: FC<IconProps> = ({ className }) => {
  const classNameValue = className ?? "w-6 h-6 text-gray-800 dark:text-white";
  return (
    <svg
      className={classNameValue}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 1h4m0 0v4m0-4-5 5.243M5 15H1m0 0v-4m0 4 5.243-5"
      />
    </svg>
  );
};

export default ArrowUpRightIcon;

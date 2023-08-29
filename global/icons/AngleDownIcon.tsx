import { FC } from "react";

import { IconProps } from "./types";

const AngleDownIcon: FC<IconProps> = ({ className }) => {
  const classNameValue = className ?? "w-6 h-6 text-gray-800 dark:text-white";
  return (
    <svg
      className={classNameValue}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
      />
    </svg>
  );
};

export default AngleDownIcon;

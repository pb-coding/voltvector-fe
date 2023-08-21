import { FC } from "react";

import { IconProps } from "@/global/icons/types";

const LeftArrowIcon: FC<IconProps> = ({ className }) => {
  const classNameValue = className ?? "w-2 h-2";
  return (
    <svg
      className={classNameValue}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 1 1 5l4 4"
      />
    </svg>
  );
};

export default LeftArrowIcon;

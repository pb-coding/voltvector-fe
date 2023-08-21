import { FC } from "react";

import { IconProps } from "@/global/icons/types";

const RightArrowIcon: FC<IconProps> = ({ className }) => {
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
        d="m1 9 4-4-4-4"
      />
    </svg>
  );
};

export default RightArrowIcon;

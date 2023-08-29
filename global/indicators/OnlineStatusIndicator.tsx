import { FC } from "react";
import { twMerge } from "tailwind-merge";

type OnlineStatusIndicatorProps = {
  isOnline: boolean;
};

const OnlineStatusIndicator: FC<OnlineStatusIndicatorProps> = ({
  isOnline,
}) => {
  return (
    <span
      className={twMerge(
        "flex w-3 h-3 bg-green-500 rounded-full",
        isOnline ? "bg-green-500" : "bg-red-500"
      )}
    ></span>
  );
};

export default OnlineStatusIndicator;

import { FC } from "react";

type BadgeProps = {
  color: string;
  text: string;
};

const Badge: FC<BadgeProps> = ({ color, text }) => {
  return (
    <span
      className={`bg-${color}-100 text-${color}-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300`}
    >
      {text}
    </span>
  );
};

export default Badge;

import { FC, ReactNode } from "react";

type SettingsLayoutProps = {
  children: ReactNode;
};

const SettingsLayout: FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <div className="mb-5">
        <h2 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">
          Settings
        </h2>
      </div>
      {children}
    </main>
  );
};

export default SettingsLayout;

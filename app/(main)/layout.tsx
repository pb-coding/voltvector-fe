import { FC, ReactNode } from "react";

import Navbar from "@/global/navbar/Navbar";
import Sidebar from "@/global/sidebar/Sidebar";
import ErrorAlert from "@/global/error/ErrorAlert";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <section>
      <Navbar />
      <Sidebar />
      <ErrorAlert />
      {children}
    </section>
  );
};

export default MainLayout;

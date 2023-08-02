import { FC, ReactNode } from "react";

import Navbar from "@/page/main/navbar/Navbar";
import Sidebar from "@/page/main/sidebar/Sidebar";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <section>
      <Navbar />
      <Sidebar />
      {children}
    </section>
  );
};

export default MainLayout;

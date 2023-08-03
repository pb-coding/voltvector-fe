import { FC, ReactNode } from "react";

import Navbar from "@/page/main/navbar/Navbar";
import Sidebar from "@/page/main/sidebar/Sidebar";
import UserProvider from "@/global/auth/UserProvider";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <section>
      <UserProvider>
        <Navbar />
        <Sidebar />
        {children}
      </UserProvider>
    </section>
  );
};

export default MainLayout;

import { FC, ReactNode } from "react";

import UserProvider from "@/global/auth/UserProvider";
import Navigation from "@/page/main/navigation/Navigation";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <section>
      <UserProvider>
        <Navigation />
        {children}
      </UserProvider>
    </section>
  );
};

export default MainLayout;

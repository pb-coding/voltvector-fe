"use client";

import { FC, useEffect, useState } from "react";

import Navbar from "@/page/main/navigation/navbar/Navbar";
import Sidebar from "@/page/main/navigation/sidebar/Sidebar";

const Navigation: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      // open sidebar on md breakpoint and up
      if (window.innerWidth >= 768) setIsSidebarOpen(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Navigation;

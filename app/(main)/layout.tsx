import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Navbar />
      <Sidebar />
      {children}
    </section>
  );
}

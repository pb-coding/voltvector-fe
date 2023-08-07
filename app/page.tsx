import { FC } from "react";
import { redirect } from "next/navigation";
import { DASHBOARD_PATH } from "@/global/routes/routes";

const Index: FC = () => {
  redirect(DASHBOARD_PATH);
};

export default Index;

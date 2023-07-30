import { FC } from "react";
import { redirect } from "next/navigation";

const SettingsPage: FC = () => {
  redirect("/settings/enphase");
};

export default SettingsPage;

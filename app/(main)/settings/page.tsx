import { FC } from "react";
import { redirect } from "next/navigation";
import { SETTINGS_ENPHASE_PATH } from "@/global/routes/routes";

const SettingsPage: FC = () => {
  redirect(SETTINGS_ENPHASE_PATH);
};

export default SettingsPage;

import { FC } from "react";

import Tabs from "@/global/ui/Tabs";
import {
  SETTINGS_ENPHASE_PATH,
  SETTINGS_MEROSS_PATH,
  SETTINGS_ACCOUNT_PATH,
} from "@/global/routes/routes";

type SettingsPageProps = {
  tab: string;
};

export const settingsTabNames = {
  enphase: "Enphase Auth",
  meross: "Meross Auth",
  account: "Account",
};
const SettingsTabs: FC<SettingsPageProps> = ({ tab }) => {
  const settingsTabs = [
    { name: settingsTabNames.enphase, link: SETTINGS_ENPHASE_PATH },
    { name: settingsTabNames.meross, link: SETTINGS_MEROSS_PATH },
    { name: settingsTabNames.account, link: SETTINGS_ACCOUNT_PATH },
  ];

  return Tabs({ tabs: settingsTabs, currentTab: tab });
};
export default SettingsTabs;

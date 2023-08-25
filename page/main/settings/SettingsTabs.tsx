import { FC } from "react";

import Tabs from "@/global/ui/Tabs";
import {
  SETTINGS_ENPHASE_PATH,
  SETTINGS_SMART_HOME_PATH,
  SETTINGS_ACCOUNT_PATH,
} from "@/global/routes/routes";

type SettingsPageProps = {
  tab: string;
};

export const settingsTabNames = {
  enphase: "Enphase Auth",
  smarthome: "Smart Home",
  account: "Account",
};
const SettingsTabs: FC<SettingsPageProps> = ({ tab }) => {
  const settingsTabs = [
    { name: settingsTabNames.enphase, link: SETTINGS_ENPHASE_PATH },
    { name: settingsTabNames.smarthome, link: SETTINGS_SMART_HOME_PATH },
    { name: settingsTabNames.account, link: SETTINGS_ACCOUNT_PATH },
  ];

  return Tabs({ tabs: settingsTabs, currentTab: tab });
};
export default SettingsTabs;

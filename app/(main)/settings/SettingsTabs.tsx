import { FC } from "react";

import Tabs from "@/global/Tabs";

type SettingsPageProps = {
  tab: string;
};

export const settingsTabNames = {
  enphase: "Enphase Authorization",
  meross: "Meross Authorization",
  account: "Account",
};
const SettingsTabs: FC<SettingsPageProps> = ({ tab }) => {
  const settingsTabs = [
    { name: settingsTabNames.enphase, link: "/settings/enphase" },
    { name: settingsTabNames.meross, link: "/settings/meross" },
    { name: settingsTabNames.account, link: "/settings/account" },
  ];

  return Tabs({ tabs: settingsTabs, currentTab: tab });
};
export default SettingsTabs;

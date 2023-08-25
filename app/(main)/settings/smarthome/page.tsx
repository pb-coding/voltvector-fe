import { FC } from "react";
import SettingsTabs from "../../../../page/main/settings/SettingsTabs";
import { settingsTabNames } from "../../../../page/main/settings/SettingsTabs";
import SmartHomeProviderOverview from "../../../../page/main/settings/smarthome/SmartHomeProviderOverview";
import SmartHomeSettingsProvider from "@/page/main/settings/smarthome/SmartHomeSettingsProvider";

const EnphaseSettingsPage: FC = () => {
  return (
    <>
      <SettingsTabs tab={settingsTabNames.smarthome} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <SmartHomeSettingsProvider>
          <SmartHomeProviderOverview />
        </SmartHomeSettingsProvider>
      </div>
    </>
  );
};

export default EnphaseSettingsPage;

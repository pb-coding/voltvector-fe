import { FC } from "react";
import EnphaseAuthSection from "@/page/main/settings/enphase/EnphaseAuthSection";
import SettingsTabs from "@/page/main/settings/SettingsTabs";
import { settingsTabNames } from "@/page/main/settings/SettingsTabs";

const EnphaseSettingsPage: FC = () => {
  return (
    <>
      <SettingsTabs tab={settingsTabNames.enphase} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <EnphaseAuthSection />
      </div>
    </>
  );
};

export default EnphaseSettingsPage;

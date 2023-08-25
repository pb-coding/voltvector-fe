import { useContext } from "react";

import { SmartHomeSettingsContext } from "../SmartHomeSettingsProvider";

export const useProviderAuth = () => {
  return useContext(SmartHomeSettingsContext);
};

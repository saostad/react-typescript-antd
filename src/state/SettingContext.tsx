import React, { useState } from "react";

const defaultSetting = {
  appTitle: "Application Title Here",
  appDescription: "Application Description Here",
};

/** placeholder for business related settings */
export const SettingContext = React.createContext({
  setting: defaultSetting,
  settingSet: (value: typeof defaultSetting) => {},
});

/** placeholder for business related settings */
export const SettingContextProvider: React.FC = ({ children }) => {
  const [setting, settingSet] = useState<typeof defaultSetting>(defaultSetting);

  const state = {
    setting,
    settingSet,
  };

  return (
    <SettingContext.Provider value={state}>{children}</SettingContext.Provider>
  );
};

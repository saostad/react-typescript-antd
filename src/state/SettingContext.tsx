import React, { useState } from "react";

/** placeholder for business related settings */
export const SettingContext = React.createContext({
  setting: {},
  settingSet: (value: string) => {},
});

/** placeholder for business related settings */
export const SettingContextProvider: React.FC = ({ children }) => {
  const [setting, settingSet] = useState("dark");

  const state = {
    setting,
    settingSet,
  };

  return (
    <SettingContext.Provider value={state}>{children}</SettingContext.Provider>
  );
};

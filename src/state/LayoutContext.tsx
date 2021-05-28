import { MenuTheme } from "antd";
import React, { useState } from "react";

const defaultLayoutSetting = {
  menuTheme: "dark" as MenuTheme,
  sider: {
    isSideBarEnabled: true,
    isSiderDefaultOpen: true,
  },
};

/** placeholder for UI related settings */
export const LayoutContext = React.createContext({
  layoutSetting: defaultLayoutSetting,
  layoutSettingSet: (value: typeof defaultLayoutSetting) => {},
});

/** placeholder for UI related settings */
export const LayoutContextProvider: React.FC = ({ children }) => {
  const [layoutSetting, layoutSettingSet] =
    useState<typeof defaultLayoutSetting>(defaultLayoutSetting);

  const state = {
    layoutSetting,
    layoutSettingSet,
  };

  return (
    <LayoutContext.Provider value={state}>{children}</LayoutContext.Provider>
  );
};

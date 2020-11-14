import React, { useState } from "react";

export const LayoutContext = React.createContext({
  menuTheme: "dark",
  menuThemeSet: (value: string) => {},
});

export const LoadingContextProvider: React.FC = ({ children }) => {
  const [menuTheme, menuThemeSet] = useState("dark");

  const state = {
    menuTheme,
    menuThemeSet,
  };

  return (
    <LayoutContext.Provider value={state}>{children}</LayoutContext.Provider>
  );
};

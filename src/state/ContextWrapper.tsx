import React from "react";
import { LayoutContextProvider } from "./LayoutContext";
import { LoadingContextProvider } from "./LoadingContext";
import { SettingContextProvider } from "./SettingContext";
import { UserContextProvider } from "./UserContext";

export const ContextWrapper: React.FC = ({ children }) => {
  return (
    <UserContextProvider>
      <LoadingContextProvider>
        <LayoutContextProvider>
          <SettingContextProvider>{children}</SettingContextProvider>
        </LayoutContextProvider>
        ;
      </LoadingContextProvider>
    </UserContextProvider>
  );
};

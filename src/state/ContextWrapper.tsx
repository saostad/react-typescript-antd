import React from "react";
import { LayoutContextProvider } from "./LayoutContext";
import { LoadingContextProvider } from "./LoadingContext";
import { UserContextProvider } from "./UserContext";

export const ContextWrapper: React.FC = ({ children }) => {
  return (
    <UserContextProvider>
      <LoadingContextProvider>
        <LayoutContextProvider>{children}</LayoutContextProvider>;
      </LoadingContextProvider>
    </UserContextProvider>
  );
};

import React, { useState } from "react";

export const LoadingContext = React.createContext({
  isLoading: false,
  isLoadingSet: (value: boolean) => {},
});

export const LoadingContextProvider: React.FC = ({ children }) => {
  const [isLoading, isLoadingSet] = useState(false);

  const state = {
    isLoading,
    isLoadingSet,
  };

  return (
    <LoadingContext.Provider value={state}>{children}</LoadingContext.Provider>
  );
};

import React, { useState } from "react";

type ContextType = {
  user: string | undefined;
  userSet: (value: string | undefined) => void;
  logout?: (history: any) => void;
};

const defaultContext = {
  user: "username",
  userSet: (value: string | undefined) => {},
};

export const UserContext = React.createContext<ContextType>(defaultContext);

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, userSet] = useState<string | undefined>(defaultContext.user);

  function logout(history: any) {
    // TODO: Put user logout code here
    history.push("/login");
    userSet("");
  }
  const state = {
    user,
    userSet,
  };

  return (
    <UserContext.Provider value={{ ...state, logout: logout }}>
      {children}
    </UserContext.Provider>
  );
};

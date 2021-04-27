import React from "react";
import "./App.less";
import { ErrorBoundaries } from "./layout/ErrorBoundaries";
import { AppRouter } from "./router/AppRouter";
import { ContextWrapper } from "./state/ContextWrapper";

const App = () => (
  <ErrorBoundaries>
    <ContextWrapper>
      <AppRouter />
    </ContextWrapper>
  </ErrorBoundaries>
);

export default App;

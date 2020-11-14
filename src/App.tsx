import React from "react";
import "./App.less";
import { ErrorBoundaries } from "./layout/ErrorBoundaries";
import { AppRouter } from "./router/AppRouter";

const App = () => (
  <ErrorBoundaries>
    <AppRouter />
  </ErrorBoundaries>
);

export default App;

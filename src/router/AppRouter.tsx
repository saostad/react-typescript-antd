import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  RouteComponentProps,
} from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { Home } from "../pages/Home";
import { Settings } from "../pages/Settings";

type Routes = Array<{
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}>;
export const routes: Routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/settings",
    component: Settings,
  },
];

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Switch>
          {routes.map((el) => {
            return (
              <Route
                key={el.path}
                exact={true}
                path={el.path}
                component={el.component}
              />
            );
          })}
        </Switch>
      </AppLayout>
    </Router>
  );
};

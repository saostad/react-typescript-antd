import React, { useContext } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  RouteComponentProps,
} from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { NotFound } from "../layout/NotFound";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Settings } from "../pages/Settings";
import { UserContext } from "../state/UserContext";

type Routes = Array<{
  path: string;
  isProtected: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}>;
export const routes: Routes = [
  {
    path: "/",
    component: Home,
    isProtected: false,
  },
  {
    path: "/settings",
    component: Settings,
    isProtected: true,
  },
  {
    path: "/login",
    component: Login,
    isProtected: false,
  },
];

export const AppRouter: React.FC = () => {
  const userContext = useContext(UserContext);

  return (
    <Router>
      <AppLayout>
        <Switch>
          {routes
            .filter((el) => {
              if (el.isProtected && !userContext.user) {
                return false;
              }
              return true;
            })
            .map((el) => {
              return (
                <Route
                  key={el.path}
                  exact={true}
                  path={el.path}
                  component={el.component}
                />
              );
            })}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
};

import { SettingFilled, UserOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  RouteComponentProps,
} from "react-router-dom";
import { getActiveRoute } from "../helpers/utils";
import { AppLayout } from "../layout/AppLayout";
import { NotFound } from "../layout/NotFound";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Settings } from "../pages/Settings";
import { UserContext } from "../state/UserContext";

export type Routes = Array<{
  path: string;
  isProtected: boolean;
  isShowInSider: boolean;
  siderTitle?: string;
  /** ant design icon import from "@ant-design/icons" */
  siderIcon?: any;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}>;

export const routes: Routes = [
  {
    path: "/",
    component: Home,
    isProtected: false,
    isShowInSider: true,
    siderTitle: "Home",
    siderIcon: <UserOutlined />,
  },
  {
    path: "/settings",
    component: Settings,
    isProtected: true,
    isShowInSider: true,
    siderTitle: "Setting",
    siderIcon: <SettingFilled />,
  },
  {
    path: "/login",
    component: Login,
    isProtected: false,
    isShowInSider: false,
  },
];

export const AppRouter: React.FC = () => {
  const userContext = useContext(UserContext);
  const activeRoutes = getActiveRoute({ routes, userContext });

  return (
    <Router>
      <AppLayout>
        <Switch>
          {activeRoutes.map((el) => {
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

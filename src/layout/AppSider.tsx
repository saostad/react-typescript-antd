import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../router/AppRouter";
import { getActiveRoute } from "../helpers/utils";
import { UserContext } from "../state/UserContext";

const { Sider } = Layout;

type Props = {};

export const AppSider: React.FC<Props> = () => {
  const userContext = useContext(UserContext);
  const activeRoutes = getActiveRoute({ routes, userContext });
  const { pathname } = useLocation();

  return (
    <Sider
      collapsible={true}
      defaultCollapsed={true}
      collapsedWidth={0}
      theme="dark"
    >
      <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
        {activeRoutes.map((el) => {
          return (
            <Menu.Item key={el.path} icon={el.siderIcon}>
              <Link to={el.path}>{el.siderTitle}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { routes } from "../router/AppRouter";
import { getActiveRoute } from "../helpers/utils";
import { UserContext } from "../state/UserContext";

const { Sider } = Layout;

type Props = {};

export const AppSider: React.FC<Props> = () => {
  const userContext = useContext(UserContext);
  const activeRoutes = getActiveRoute({ routes, userContext });

  return (
    <Sider
      collapsible={true}
      defaultCollapsed={true}
      collapsedWidth={0}
      theme="dark"
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
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

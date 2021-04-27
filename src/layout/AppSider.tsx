import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, SettingFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

type Props = {};

export const AppSider: React.FC<Props> = () => {
  return (
    <Sider
      collapsible={true}
      defaultCollapsed={true}
      collapsedWidth={0}
      theme="dark"
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingFilled />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

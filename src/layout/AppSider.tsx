import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

type Props = {};

export const AppSider: React.FC<Props> = () => {
  return (
    <Sider
      collapsible={true}
      defaultCollapsed={false}
      collapsedWidth={0}
      theme="dark"
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

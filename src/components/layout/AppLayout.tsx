import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";

const { Header } = Layout;

export const AppLayout: React.FC<any> = () => {
  const [collapsed, collapsedSet] = useState(false);

  function toggle() {
    collapsedSet(!collapsed);
  }

  return (
    <StyledLayout>
      <AppSider collapsed={collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <AppContent />
      </Layout>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;

import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

export const AppContent = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      Content
    </Content>
  );
};

import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

export const AppContent = () => {
  return (
    <Content
      style={{
        margin: "16px 16px 0 16px",
        padding: 24,
        background: "rgb(255, 255, 255)",
      }}
    >
      Content
    </Content>
  );
};

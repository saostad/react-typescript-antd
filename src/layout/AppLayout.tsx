import { Layout } from "antd";
import React from "react";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";

type Props = {};

export const AppLayout: React.FC<Props> = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
      <AppFooter />
    </Layout>
  );
};

import { Layout } from "antd";
import React, { useContext } from "react";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { LayoutContext } from "../state/LayoutContext";

type Props = {};

export const AppLayout: React.FC<Props> = ({ children }) => {
  const layoutContext = useContext(LayoutContext);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Layout>
        {!layoutContext.layoutSetting.sider.isSideBarEnabled ? null : (
          <AppSider />
        )}
        <AppContent>{children}</AppContent>
      </Layout>
      <AppFooter />
    </Layout>
  );
};

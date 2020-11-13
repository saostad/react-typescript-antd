import { Divider, Layout } from "antd";
import React from "react";

const { Footer } = Layout;

export const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      © {process.env.YEAR} The Austin Company. All Rights Reserved.
      <h6>
        <span>
          Design and Development:
          <a href="https://www.linkedin.com/in/saeidostad"> Saeid Ostad.</a>
        </span>
        <Divider type="vertical" />
        <span>v{process.env.VERSION}</span>
        <Divider type="vertical" />
        <span>Placeholder</span>
      </h6>
    </Footer>
  );
};

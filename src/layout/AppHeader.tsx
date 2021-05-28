import React, { useContext } from "react";

import { Button, Col, Layout, Row, Space, Typography } from "antd";
import { useHistory } from "react-router-dom";
import { UserContext } from "../state/UserContext";
import { SettingContext } from "../state/SettingContext";

const { Title } = Typography;
const { Header } = Layout;

export const AppHeader: React.FC = () => {
  const userContext = useContext(UserContext);
  const settingContext = useContext(SettingContext);
  const history = useHistory();
  return (
    <Header>
      <Row>
        <Col span={18}>
          <Space direction="vertical">
            <Title level={3} style={{ color: "white" }}>
              {settingContext.setting.appTitle}
            </Title>
          </Space>
        </Col>
        <Col span={6}>
          {!userContext.user ? (
            <Button type="link" onClick={() => history.push("/login")}>
              Login
            </Button>
          ) : (
            <>
              <span style={{ color: "white" }}>Welcome {userContext.user}</span>
              <Button type="link" onClick={() => userContext.logout?.(history)}>
                Logout
              </Button>
            </>
          )}
        </Col>
      </Row>
    </Header>
  );
};

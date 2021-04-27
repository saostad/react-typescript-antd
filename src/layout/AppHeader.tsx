import React, { useContext } from "react";

import { Button, Col, Layout, Row } from "antd";
import { useHistory } from "react-router-dom";
import { UserContext } from "../state/UserContext";

const { Header } = Layout;

export const AppHeader: React.FC = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();
  return (
    <Header>
      <Row>
        <Col span={18}>
          <h1 style={{ color: "white" }}>Application Title Here</h1>
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

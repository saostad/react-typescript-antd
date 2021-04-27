import { Form, Input, Button } from "antd";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../state/UserContext";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

type FormValues = {
  username: string;
  password: string;
};

export const Login: React.FC = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (userContext.user) {
      history.push("/");
    }
  }, [history, userContext.user]);

  const onFinish = (values: FormValues) => {
    // TODO: write user validation code
    userContext.userSet(values.username);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { loginAdmin } from "../../../api/authApi";

const LoginPage = () => {
  const history = useHistory();
  const [validate, setValidate] = useState();
  const onFinish = async (values) => {
    // console.log("Success:", values);
    const res = await loginAdmin(values?.email, values?.password);
    if (res?.status === 422) {
      const valid = res.data?.reduce((result, item) => {
        return { ...result, [item.param]: item.msg };
      }, {});
      setValidate(valid);
    } else {
      history.push("/admin/dashboard");
      message.success("Chào quản trị viên");
    }
  };

  return (
    <div className="aLogin">
      <h3>Quản trị viên</h3>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Tên tài khoản: "
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên tài khoản!",
            },
          ]}
          {...(validate && {
            hasFeedback: true,
            help: validate?.email,
            validateStatus: validate?.email ? "error" : "success",
          })}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              pattern: new RegExp("^.{8,16}$"),
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
          {...(validate && {
            hasFeedback: true,
            help: validate?.password,
            validateStatus: validate?.password ? "error" : "success",
          })}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;

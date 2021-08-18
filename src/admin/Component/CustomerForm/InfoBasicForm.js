import { Form, Input, Select } from "antd";
import React from "react";
import { Container, Col, Row } from "reactstrap";

const { Option } = Select;
const InfoBasicForm = ({ validate, formPage = 'ADD' }) => {
  return (
    <div className="product-edit product-edit-general">
      <Container fluid={true}>
        <Row>
          <Col lg={7} style={{ padding: "0" }}>
            <div className="form">
              <Form.Item
                label="Tên người dùng"
                name="username"
                rules={[
                  {
                    required: true,
                  },
                ]}
                {...(validate && {
                  hasFeedback: true,
                  help: validate?.username,
                  validateStatus: validate?.username ? "error" : "success",
                })}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true }]}
                {...(validate && {
                  hasFeedback: true,
                  help: validate?.email,
                  validateStatus: validate?.email ? "error" : "success",
                })}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
                {...(validate && {
                  hasFeedback: true,
                  help: validate?.password,
                  validateStatus: validate?.password ? "error" : "success",
                })}
              >
                <Input.Password value="oke" />
              </Form.Item>
              <Form.Item
                label="Phân quyền"
                name="role"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Trạng thái tài khoản"
                  allowClear
                  style={{ width: "100%" }}
                >
                  <Option value="true">Đã kích hoạt</Option>
                  <Option value="false">Chưa kích hoạt</Option>
                </Select>
              </Form.Item>
            </div>
          </Col>
          <Col lg={5} style={{ padding: "0 30px" }}>
            <p style={{ marginTop: "25px" }}>
              <strong>Lưu ý: </strong>Trạng thái tài khoản là nếu là chưa kích
              hoạt thì tài khoản người dùng cần xác thực lại!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoBasicForm;

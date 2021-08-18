import { Form, Input, Select } from "antd";
import React from "react";
import { Container, Col, Row } from "reactstrap";

const { Option } = Select;
const InfoBasicForm = ({ validate }) => {
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
                  validateStatus: validate.username ? "success" : "error",
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
                  },
                ]}
              >
                <Input />
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
                  placeholder="Chọn phân quyền"
                  allowClear
                  style={{ width: "100%" }}
                >
                  <Option value="user">Khách hàng</Option>
                  <Option value="admin">Quản trị viên</Option>
                </Select>
              </Form.Item>
            </div>
          </Col>
          <Col lg={5} style={{ padding: "0 30px" }}>
            <p style={{ marginTop: "25px" }}>
              <strong>Lưu ý: </strong>Khi tạo người dùng có thể chọn phân quyền
              (người dùng hoặc quản trị viên)
            </p>
            <p>
              <strong>Quản trị viên</strong> có thể tạo quản lý toàn bọ trang
              web!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoBasicForm;

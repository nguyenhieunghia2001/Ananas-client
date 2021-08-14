import React, { useState } from "react";
import { Input, Select, Form } from "antd";
const { Option } = Select;

const GeneralForm = () => {
  return (
    <div className="product-edit product-edit-general">
      <h5 className="title">Thông tin chung</h5>
      <div className="form">
        <Form.Item
          name="name"
          label="Tên sản phẩm"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="Danh mục"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            style={{ width: "100%" }}
            // onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="status"
          label="Trạng thái"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            style={{ width: "100%" }}
            // onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            style={{ width: "100%" }}
            // onChange={handleChange}
          >
            <Option value="MALE">Nam</Option>
            <Option value="FEMALE">Nữ</Option>
            <Option value="ALL">Nam và nữ</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="price"
          label="Giá"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="detail"
          label="Chi tiết"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>
    </div>
  );
};

export default GeneralForm;

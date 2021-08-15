import React, { useEffect, useState } from "react";
import { Input, Select, Form } from "antd";
import { getAllCategory } from "../../../api/CategoryApi";
import { getAllStatus } from "../../../api/StatusApi";
const { Option } = Select;

const GeneralForm = () => {
  const [info, setInfo] = useState({
    categorys: [],
    statuses: [],
  });
  useEffect(() => {
    async function fetch() {
      const dataCat = await getAllCategory();
      const dataStatus = await getAllStatus();
      setInfo({
        categorys: dataCat?.map(({ _id, name }) => ({
          label: name,
          value: _id,
        })),
        statuses: dataStatus?.map(({ _id, name }) => ({
          label: name,
          value: _id,
        })),
      });
    }
    fetch();
  }, []);
  console.log(info);
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
            placeholder="Chọn danh mục"
            allowClear
            style={{ width: "100%" }}
            // onChange={handleChange}
            options={info?.categorys}
            optionFilterProp="label"
            filterOption={(input, option) =>
              option.label?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
            }
          />
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
            options={info?.statuses}
            optionFilterProp="label"
            filterOption={(input, option) =>
              option.label?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
            }
          />
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

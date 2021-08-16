import React, { useEffect, useState } from "react";
import { Input, Select, Form } from "antd";
import { getAllCategory } from "../../../api/CategoryApi";
import { getAllStatus } from "../../../api/StatusApi";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const { Option } = Select;

const GeneralForm = ({ form }) => {
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
  return (
    <div className="product-edit product-edit-general">
      <h5 className="title">Thông tin chung</h5>
      <div className="form">
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Danh mục"
          name="category"
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
          label="Trạng thái"
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Chọn trạng thái"
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
          label="Giới tính"
          name="gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Chọn giới tính"
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
          label="Giá"
          name="price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Chi tiết"
          name="detail"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CKEditor
            // style={{ width: "100%" }}
            editor={ClassicEditor}
            data={form?.getFieldValue("detail")}
            onChange={(_, editor) => {
              const data = editor.getData();
              form.setFieldsValue({ detail: data });
            }}
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default GeneralForm;

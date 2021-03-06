import { Modal, Form, Input, message } from "antd";
import React, { useState } from "react";
import { addCategory } from "../../../api/CategoryApi";

const AddCategoryForm = ({ isModalAdd, setIsModalAdd, setCategories }) => {
  const [validate, setValidate] = useState();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const res = await addCategory(values.name);
    setValidate({});
    if (res.status === 200) {
      message.success("Thêm thành công");
      setCategories((pre) => {
        return [...pre, res.data?.category];
      });
      setIsModalAdd(false);
    } else {
      const valid = res.data?.reduce((result, item) => {
        return (result = { ...result, [item.param]: item.msg });
      }, {});
      setValidate(valid);
    }
  };
  const handleOk = () => {
    form.submit();
  };
  const handleCancel = () => {
    setIsModalAdd(false);
  };
  return (
    <Modal
      title="Thêm danh mục mới"
      visible={isModalAdd}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form name="basic" form={form} onFinish={onFinish}>
        <Form.Item
          label="Tên danh mục"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng điền điền tên danh mục",
            },
          ]}
          {...(validate && {
            hasFeedback: true,
            help: validate?.name,
            validateStatus: validate?.name ? "error" : "success",
          })}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCategoryForm;

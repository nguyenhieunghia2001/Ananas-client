import { Modal, Form, Input, message } from "antd";
import React, { useState } from "react";
import { addSize } from "../../../api/SizeApi";

const AddSizeForm = ({ isModalAdd, setIsModalAdd, setSizes }) => {
  const [validate, setValidate] = useState();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const res = await addSize(values.name);
    setValidate({});
    if (res.status === 200) {
      message.success("Thêm thành công");
      setSizes((pre) => {
        return [...pre, res.data?.size];
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
      title="Thêm kích thước mới"
      visible={isModalAdd}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form name="basic" form={form} onFinish={onFinish}>
        <Form.Item
          label="Tên kích thước"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng điền điền tên kích thước",
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

export default AddSizeForm;

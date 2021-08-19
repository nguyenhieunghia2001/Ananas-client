import { Modal, Form, Input, message } from "antd";
import React, { useState } from "react";
import { addStatus } from "../../../api/StatusApi";

const AddStatusForm = ({ isModalAdd, setIsModalAdd, setStatuses }) => {
  const [validate, setValidate] = useState();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const res = await addStatus(values.name);
    setValidate({});
    if (res.status === 200) {
      message.success("Thêm thành công");
      console.log(res);
      setStatuses((pre) => {
        return [...pre, res.data?._status];
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
      title="Thêm trạng thái mới"
      visible={isModalAdd}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form name="basic" form={form} onFinish={onFinish}>
        <Form.Item
          label="Tên trạng thái"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng điền điền tên trạng thái",
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

export default AddStatusForm;

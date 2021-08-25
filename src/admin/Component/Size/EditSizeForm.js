import { Modal, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { editSize, getSizeById } from "../../../api/SizeApi";

const EditSizeForm = ({ modalEdit, setModalEdit, id, setSizes }) => {
  const [validate, setValidate] = useState();
  const [form] = Form.useForm();
  useEffect(() => {
    async function fetch() {
      if (id) {
        const data = await getSizeById(id);
        form.setFieldsValue({ name: data?.name });
      }
    }
    fetch();
  }, [id, form]);

  const onFinish = async (values) => {
    const res = await editSize(id, values.name);
    setValidate({});
    if (res.status === 200) {
      setSizes((pre) => {
        const index = pre?.findIndex((item) => item?._id === id);
        return [
          ...pre.slice(0, index),
          {
            _id: id,
            name: values.name,
          },
          ...pre.slice(index + 1, pre.length),
        ];
      });
      setModalEdit({
        isShow: false,
        id: "",
      });
      message.success("Cập nhật thành công");
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
    setModalEdit({
      isShow: false,
      id: "",
    });
  };
  return (
    <Modal
      title="Cập nhật kích thước"
      visible={modalEdit}
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

export default EditSizeForm;

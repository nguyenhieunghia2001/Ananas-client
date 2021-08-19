import { Modal, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { editCategory, getCategoryById } from "../../../api/CategoryApi";

const EditCategoryForm = ({ modalEdit, setModalEdit, id, setCategories }) => {
  const [validate, setValidate] = useState();
  const [form] = Form.useForm();
  useEffect(() => {
    async function fetch() {
      if (id) {
        const data = await getCategoryById(id);
        console.log(data);
        // setCategory(data);
        form.setFieldsValue({ name: data?.name });
      }
    }
    fetch();
  }, [id]);

  const onFinish = async (values) => {
    const res = await editCategory(id, values.name);
    console.log(res);
    setValidate({});
    if (res.status === 200) {
      console.log(1);
      setCategories((pre) => {
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
      title="Cập nhật danh mục"
      visible={modalEdit}
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

export default EditCategoryForm;

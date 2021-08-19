import { Modal, Form, Input } from "antd";
import React, { useEffect } from "react";
import { getCategoryById } from "../../../api/CategoryApi";

const EditCategoryForm = ({ modalEdit, setModalEdit, id }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    async function fetch() {
      if (id) {
        const data = await getCategoryById(id);
        console.log(data);
        // setCategory(data);
        form.setFieldsValue({category: data?.name})
        console.log(form.getFieldValue('category'));
      }
    }
    fetch();
  }, [id]);
  
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleOk = () => {
    form.submit();
    console.log(form.getFieldValue());
    // setModalEdit({
    //   isShow: false,
    //   id: "",
    // });
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
          name="category"
          rules={[
            {
              required: true,
              message: "Vui lòng điền điền tên danh mục",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCategoryForm;

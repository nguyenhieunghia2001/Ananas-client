import React, { useEffect, useState } from "react";
import { Form, Modal, Upload } from "antd";
import {
    PlusOutlined,
  } from "@ant-design/icons";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const ImagesForm = ({ form }) => {
  const [multipleFile, setMultipleFile] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  });

  const handleCancel = () => {
    setMultipleFile((pre) => {
      return { ...pre, previewVisible: false };
    });
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    // console.log(file);
    setMultipleFile((pre) => {
      return {
        ...pre,
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle:
          file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
      };
    });
  };

  const handleChange = ({ fileList }) => {
    console.log(fileList);
    setMultipleFile((pre) => {
      return {
        ...pre,
        fileList,
      };
    });
    console.log(multipleFile);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  // on change images
  useEffect(() => {
    form.setFieldsValue({ images: multipleFile.fileList });
  }, [multipleFile, form]);
  console.log(form.getFieldValue());
  return (
    <Form.Item
      name="images"
      label="Images"
      extra="Tối đa 6 ảnh, dung lượng 1,24MB"
    >
      <Upload
        listType="picture-card"
        fileList={multipleFile?.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {multipleFile?.fileList.length >= 6 ? null : uploadButton}
      </Upload>
      <Modal
        visible={multipleFile.previewVisible}
        title={multipleFile.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{ width: "100%" }}
          src={multipleFile.previewImage}
        />
      </Modal>
    </Form.Item>
  );
};

export default ImagesForm;

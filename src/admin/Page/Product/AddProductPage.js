import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Input, Select, Upload, Button, Modal, Table, Form } from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import GeneralForm from "../../Component/ProductForm/GeneralForm";
import AttributeForm from "../../Component/ProductForm/AttributeForm";
import { createProduct } from "../../../api/ProductApi";
import Loading from "../../../components/Loading/LoadingSpinning";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const AddProductPage = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [form] = Form.useForm();
  const [multipleFile, setMultipleFile] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  });

  const handleCancel = () =>
    setMultipleFile((pre) => {
      return { ...pre, previewVisible: false };
    });

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
  const onFinish = async (value) => {
    setLoadingState(true);
    const res = await createProduct(value);
    console.log(res);

    setLoadingState(false);
  };
  const onSubmit = () => {
    form.submit();
  };
  // on change images
  useEffect(() => {
    form.setFieldsValue({ images: multipleFile.fileList });
  }, [multipleFile, form]);
  console.log(form.getFieldValue());
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Thêm sản phẩm</h5>
        <div className="header-right"></div>
      </header>

      <div className="content">
        <div className="header-sticky">
          <div className="left">
            <Link to="/admin/product" className="">
              <BsArrowLeftShort />
              <span>Sản phẩm</span>
            </Link>
          </div>
          <div className="right">
            <button
              className="btn btn-header btn-cancel"
              style={{ background: "#958e8c" }}
            >
              Hủy
            </button>
            <button className="btn btn-header btn-save" onClick={onSubmit}>
              Xác nhận
            </button>
          </div>
        </div>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <div className="product-edit-wrapper">
            <Container fluid={true}>
              <Row>
                <Col lg={7} style={{ padding: "0" }}>
                  <GeneralForm />
                  <div className="product-edit product-edit-image">
                    <h5 className="title">Hình ảnh</h5>
                    <div className="image-group">
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
                          {multipleFile?.fileList.length >= 6
                            ? null
                            : uploadButton}
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
                    </div>
                  </div>
                </Col>
                <Col lg={5} style={{ paddingRight: "0" }}>
                  <AttributeForm form={form} />
                </Col>
              </Row>
            </Container>
          </div>
        </Form>
      </div>
      <div
        className={`loading ${
          loadingState ? "loading-active" : ""
        }`}
      >
        <Loading color="#FF5F17" />
      </div>
    </div>
  );
};

export default AddProductPage;

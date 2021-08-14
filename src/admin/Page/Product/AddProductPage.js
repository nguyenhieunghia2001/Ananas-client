import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Input, Select, Upload, Button, Modal } from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Option } = Select;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const AddProductPage = () => {
  const [multipleFile, setMultipleFile] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ],
  });

  const handleCancel = () =>
    setMultipleFile((pre) => {
      return { ...pre, previewVisible: false };
    });

  const handlePreview = async (file) => {
    let test;
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
            <button className="btn btn-header btn-save">Xác nhận</button>
          </div>
        </div>
        <div className="product-edit">
          <Container fluid={true}>
            <Row>
              <Col lg={7} style={{ padding: "0" }}>
                <div className="product-edit-general">
                  <h5 className="title">Thông tin chung</h5>
                  <div className="form">
                    <div className="input-group">
                      <lable>Tên sản phẩm</lable>
                      <Input />
                    </div>
                    <div className="horizontal">
                      <div className="input-group">
                        <lable>Danh mục</lable>
                        <Select
                          defaultValue="lucy"
                          style={{ width: "100%" }}
                          // onChange={handleChange}
                        >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="disabled" disabled>
                            Disabled
                          </Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                      <div className="input-group">
                        <lable>Trạng thái</lable>
                        <Select
                          defaultValue="lucy"
                          style={{ width: "100%" }}
                          // onChange={handleChange}
                        >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="disabled" disabled>
                            Disabled
                          </Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                    </div>
                    <div className="input-group">
                      <lable>Giới tính</lable>
                      <Select
                        defaultValue="lucy"
                        style={{ width: "100%" }}
                        // onChange={handleChange}
                      >
                        <Option value="MALE">Nam</Option>
                        <Option value="FEMALE">Nữ</Option>
                        <Option value="ALL">Nam và nữ</Option>
                      </Select>
                    </div>
                    <div className="input-group">
                      <lable>Giá</lable>
                      <Input />
                    </div>
                    <div className="input-group">
                      <lable>Chi tiết</lable>
                      <Input />
                    </div>
                  </div>
                </div>
                <div className="product-edit-image">
                  <h5 className="title">Hình ảnh</h5>
                  <div className="image-group">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={multipleFile?.fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {multipleFile?.fileList.length >= 8 ? null : uploadButton}
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
                  </div>
                </div>
              </Col>
              <Col lg={5}></Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;

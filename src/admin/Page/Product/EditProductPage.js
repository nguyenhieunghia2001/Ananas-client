import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useHistory, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Form, message } from "antd";
import GeneralForm from "../../Component/ProductForm/GeneralForm";
import AttributeForm from "../../Component/ProductForm/AttributeForm";
import Loading from "../../../components/Loading/LoadingSpinning";
import ImagesForm from "../../Component/ProductForm/ImagesForm";
import { editProduct, getProductById } from "../../../api/ProductApi";
import { CLOUDINARY_LINK } from "../../../utits/base";

const EditProductPage = () => {
  let history = useHistory();
  const { id } = useParams();
  const [loadingState, setLoadingState] = useState(false);
  const [form] = Form.useForm();
  const [sizeList, setSizeList] = useState();
  const [fileList, setFileList] = useState({
    default: [],
    removeFiles: [],
  });
  useEffect(() => {
    async function fetch() {
      const data = await getProductById(id);
      console.log(data);
      await form.setFieldsValue({
        name: data?.name,
        category: data?.category?._id,
        status: data?.status?._id,
        gender: data?.gender,
        price: data?.price,
        detail: data?.des,
        images: data?.images,
        sizes: data?.sizes,
      });
      setSizeList(data?.sizes);
      setFileList({
        default: data?.images?.map((item) => ({
          uid: item.uid,
          _id: item._id,
          url: `${CLOUDINARY_LINK}${item.urlPublic}`,
        })),
        removeFiles: [],
      });
    }
    fetch();
  }, [id, form]);
  const onFinish = async (value) => {
    console.log(value);
    setLoadingState(true);
    const responce = await editProduct(value, fileList, id);
    if (responce) message.success("Cập nhật thành công");
    else message.error("Có lỗi xảy ra vui lòng thử lại");
    setLoadingState(false);
    history.push("/admin/product");
  };
  const onSubmit = () => {
    form.submit();
  };
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Chỉnh sửa sản phẩm</h5>
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
                  <GeneralForm form={form} />
                  <div className="product-edit product-edit-image">
                    <h5 className="title">Hình ảnh</h5>
                    <div className="image-group">
                      {fileList && (
                        <ImagesForm
                          form={form}
                          fileList={fileList.default}
                          setFileList={setFileList}
                        />
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={5} style={{ paddingRight: "0" }}>
                  {sizeList && (
                    <AttributeForm form={form} sizeList={sizeList} />
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </Form>
      </div>
      <div className={`loading ${loadingState ? "loading-active" : ""}`}>
        <Loading color="#FF5F17" />
      </div>
    </div>
  );
};

export default EditProductPage;

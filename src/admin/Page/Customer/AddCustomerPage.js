import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Form } from "antd";
import Loading from "../../../components/Loading/LoadingSpinning";
import InfoBasicForm from "../../Component/CustomerForm/InfoBasicForm";

const AddCustomerPage = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [validate, setValidate] = useState();
  const [form] = Form.useForm();
  const onFinish = async (value) => {
    setValidate({})
    setLoadingState(true);
    // const res = await createProduct(value);
    // console.log(value);
    // form
    //   .validateFields()
    //   .then((er) => {
    //     console.log(er);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setValidate({ email: "email đã dc đăng kí" });
    setLoadingState(false);
  };
  const onSubmit = () => {
    form.submit();
  };
  // console.log(form.getFieldValue());
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
              <span>Khách hàng</span>
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
            <InfoBasicForm
              form={form}
              validate={validate}
              setValidate={setValidate}
            />
          </div>
        </Form>
      </div>
      <div className={`loading ${loadingState ? "loading-active" : ""}`}>
        <Loading color="#FF5F17" />
      </div>
    </div>
  );
};

export default AddCustomerPage;

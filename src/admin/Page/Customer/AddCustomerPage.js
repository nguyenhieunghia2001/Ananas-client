import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import { Form, message } from "antd";
import Loading from "../../../components/Loading/LoadingSpinning";
import InfoBasicForm from "../../Component/CustomerForm/InfoBasicForm";
import { registerAuth } from "../../../api/authApi";

const AddCustomerPage = () => {
  let history = useHistory();
  const [loadingState, setLoadingState] = useState(false);
  const [validate, setValidate] = useState();
  const [form] = Form.useForm();
  const onFinish = async (value) => {
    setValidate({});
    setLoadingState(true);
    const res = await registerAuth(value.email, value.password, value.username);
    if (res?.status === 422) {
      const valid = res.data?.reduce((result, item) => {
        return (result = { ...result, [item.param]: item.msg });
      }, {});
      setValidate(valid);
    } else {
      message.success("Thêm tài khoản thành công");
    }
    setLoadingState(false);
    history.push("/admin/product");
  };
  const onSubmit = () => {
    form.submit();
  };
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Thêm sản phẩm</h5>
        <div className="header-right"></div>
      </header>

      <div className="content">
        <div className="header-sticky">
          <div className="left">
            <Link to="/admin/customer" className="">
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

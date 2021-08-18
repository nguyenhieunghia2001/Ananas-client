import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useHistory, useParams } from "react-router-dom";
import { Form, message } from "antd";
import Loading from "../../../components/Loading/LoadingSpinning";
import InfoBasicForm from "../../Component/CustomerForm/InfoBasicForm";
import { editAccountByAdmin, getInfoById } from "../../../api/accountApi";

const EditCustomerPage = () => {
  let history = useHistory();
  const { id } = useParams();
  const [loadingState, setLoadingState] = useState(false);
  const [validate, setValidate] = useState();
  const [form] = Form.useForm();
  useEffect(() => {
    async function fetch() {
      const data = await getInfoById(id);
      form.setFieldsValue({
        username: data?.username,
        email: data?.email,
        password: 'hiddenpass'
      });
    }
    fetch();
  }, [form, id]);
  const onFinish = async (value) => {
    setValidate({});
    setLoadingState(true);
    const res = await editAccountByAdmin(value);
    if (res?.status === 422) {
      const valid = res.data?.reduce((result, item) => {
        return (result = { ...result, [item.param]: item.msg });
      }, {});
      setValidate(valid);
    } else {
      message.success("Cập nhật tài khoản thành công");
      history.push("/admin/customer");
    }
    setLoadingState(false);
  };
  const onSubmit = () => {
    form.submit();
  };
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Chỉnh sửa khách hàng</h5>
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

export default EditCustomerPage;

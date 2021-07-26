import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { updatePass } from "../../../api/accountApi";
import Loading from "../../../components/Loading/LoadingSpinning";
import { Link } from "react-router-dom";

const form = {
  oldPass: "",
  newPass: "",
  confirmPass: "",
  error: {},
};
const ChangePassword = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [formState, setFormState] = useState(form);
  const onChangeForm = (e) => {
    const inputTag = e.target;
    setFormState((pre) => {
      return {
        ...pre,
        [inputTag.name]: inputTag.value,
      };
    });
  };
  const handleSubmit = async () => {
    setLoadingState(true);
    setFormState((pre) => {
      return {
        ...pre,
        error: {},
      };
    });
    const res = await updatePass(
      formState.oldPass,
      formState.newPass,
      formState.confirmPass
    );

    if (res?.status === 422) {
      const t = res.data?.reduce(
        (result, item) => {
          return {
            ...result,
            [item.param]: item.msg,
          };
        },
        {
          oldPass: "",
          newPass: "",
          confirmPass: "",
        }
      );
      setFormState((pre) => {
        return {
          ...pre,
          error: t,
        };
      });
    } else {
      setFormState(form);
    }
    setLoadingState(false);
  };
  return (
    <div className="inner">
      <div className="inner__top">
        <h4>Đổi Mật Khẩu</h4>
        <p>
          Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
        </p>
      </div>
      <div className="divider-img" />
      <div className="inner__body profile">
        <Row>
          <Col lg="9">
            <div className="profile__left">
              <div className="child__group">
                <Row>
                  <Col lg="3">
                    <p>Mật Khẩu Hiện Tại</p>
                  </Col>
                  <Col lg="9">
                    <div className={formState.error?.oldPass && "is-valid"}>
                      <input
                        type="password"
                        name="oldPass"
                        placeholder="Mật Khẩu Hiện Tại"
                        value={formState.oldPass}
                        onChange={onChangeForm}
                      />
                      <div className="valid-msg">
                        {formState.error?.oldPass}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="child__group">
                <Row>
                  <Col lg="3">
                    <p>Mật Khẩu Mới</p>
                  </Col>
                  <Col lg="9">
                    <div className={formState.error?.newPass && "is-valid"}>
                      <input
                        type="password"
                        name="newPass"
                        placeholder="Mật Khẩu Mới"
                        value={formState.newPass}
                        onChange={onChangeForm}
                      />
                      <div className="valid-msg">
                        {formState.error?.newPass}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="child__group">
                <Row>
                  <Col lg="3">
                    <p>Xác Nhận Mật Khẩu</p>
                  </Col>
                  <Col lg="9">
                    <div className={formState.error?.confirmPass && "is-valid"}>
                      <input
                        type="password"
                        name="confirmPass"
                        placeholder="Xác Nhận Mật Khẩu"
                        value={formState.confirmPass}
                        onChange={onChangeForm}
                      />
                      <div className="valid-msg">
                        {formState.error?.confirmPass}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-account"
                  onClick={handleSubmit}
                >
                  Lưu
                </button>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="fogetPass">
              <Link to="">Quên mật khẩu?</Link>
            </div>
          </Col>
        </Row>
      </div>
      {/* //loading */}
      <div
        className={`inner__loading ${
          loadingState ? "inner__loading-active" : ""
        }`}
      >
        <Loading color="#FF5F17" />
      </div>
    </div>
  );
};

export default ChangePassword;

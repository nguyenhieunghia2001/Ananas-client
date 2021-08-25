import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Row } from "reactstrap";
import MeImage from "../../../assets/images/me.jpg";
import { getInfo, updateInfo } from "../../../api/accountApi";
import { checkPhone } from "../../../utits/regex";
import Loading from "../../../components/Loading/LoadingSpinning";
import { CLOUDINARY_LINK } from "../../../utits/base";
import { AccountContext } from "../../../context/AccountContext";

const Profile = () => {
  const fileInput = useRef();
  const { setUser } = useContext(AccountContext);
  const [loadingState, setLoadingState] = useState(false);
  const [accountState, setAccountState] = useState({
    username: "",
    email: "",
    phone: "",
    public_Id: "",
    avatarLocal: "",
    error: function () {
      const _this = this;
      return {
        username: function () {
          if (!_this.username) return "Vui lòng điền tên khách hàng";
        },
        phone: function () {
          if (!_this.phone) return "vui lòng điền số điện thoại";
          if (!checkPhone.test(_this.phone)) return "Số điện thoại không đúng";
        },
      };
    },
  });
  useEffect(() => {
    async function fetch() {
      const { username, phone, email, public_Id } = await getInfo();
      setAccountState((pre) => {
        return {
          ...pre,
          username,
          email,
          phone,
          public_Id,
        };
      });
    }
    fetch();
  }, []);
  const changeAvatar = (evt) => {
    const [file] = evt.target.files;
    if (file) {
      setAccountState((pre) => {
        return {
          ...pre,
          avatarLocal: URL.createObjectURL(file),
        };
      });
    }
    // console.log(fileInput.current.files[0]);
  };
  const handleInputChange = (e) => {
    const inputTag = e.target;
    setAccountState((pre) => {
      return {
        ...pre,
        [inputTag?.name]: inputTag?.value,
      };
    });
  };
  const handleSubmit = async () => {
    const formData = {
      public_Id: fileInput.current.files[0],
      username: accountState.username,
      phone: accountState.phone,
    };
    setLoadingState(true);
    const { username, public_Id } = await updateInfo(formData);
    // console.log(username, public_Id);
    await setUser({ username, public_Id });
    setLoadingState(false);
  };
  return (
    <div className="inner">
      <div className="inner__top">
        <h4>Hồ Sơ Của Tôi</h4>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="divider-img" />
      <div className="inner__body profile">
        <Row>
          <Col lg="9">
            <div className="profile__left">
              <div className="child__group">
                <Row>
                  <Col lg="3">
                    <p>Tên khách hàng</p>
                  </Col>
                  <Col lg="9">
                    <div
                      className={accountState.error()?.username() && "is-valid"}
                    >
                      <input
                        type="text"
                        name="username"
                        placeholder="Tên khách hàng"
                        value={accountState?.username || ""}
                        onChange={handleInputChange}
                      />
                      <div className="valid-msg">
                        {accountState.error()?.username()}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="child__group">
                <Row>
                  <Col lg="3">
                    <p>Email</p>
                  </Col>
                  <Col lg="9">
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      value={accountState?.email || ""}
                      onChange={handleInputChange}
                      readOnly
                    />
                  </Col>
                </Row>
              </div>
              <div className="child__group">
                <Row>
                  <Col lg="3">
                    <p>Số điện thoại</p>
                  </Col>
                  <Col lg="9">
                    <div
                      className={accountState.error()?.phone() && "is-valid"}
                    >
                      <input
                        type="text"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={accountState?.phone || ""}
                        onChange={handleInputChange}
                      />
                      <div className="valid-msg">
                        {accountState.error()?.phone()}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="profile__right">
              <div className="image">
                <img
                  src={
                    accountState.avatarLocal
                      ? accountState.avatarLocal
                      : accountState.public_Id
                      ? `${CLOUDINARY_LINK}${accountState.public_Id}`
                      : MeImage
                  }
                  alt="hình người dùng"
                />
              </div>
              <input
                accept="image/*"
                type="file"
                id="imgInp"
                className="inputfile"
                ref={fileInput}
                onChange={changeAvatar}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-account"
              onClick={handleSubmit}
            >
              Lưu
            </button>
          </div>
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

export default Profile;

import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import MeImage from "../../../assets/images/me.jpg";
import { getInfo } from "../../../api/accountApi";
import {checkPhone} from '../../../utits/regex'

const Profile = () => {
  const [accountState, setAccountState] = useState({
    username: "",
    email: "",
    phone: "",
    avatar: "",
    error: function () {
      const _this = this;
      return {
        username: function () {
          if (!_this.username) return "Vui lòng điền tên khách hàng";
        },
        phone: function () {
          console.log(checkPhone.test(_this.phone));
          if (!_this.phone) return "vui lòng điền số điện thoại";
          if (!checkPhone.test(_this.phone)) return "Số điện thoại không đúng";
        },
      };
    },
  });
  useEffect(() => {
    async function fetch() {
      const { username, phone, email } = await getInfo();
      setAccountState((pre) => {
        return {
          ...pre,
          username,
          email,
          phone,
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
          avatar: URL.createObjectURL(file),
        };
      });
    }
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
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-account">
                  Lưu
                </button>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="profile__right">
              <div className="image">
                <img
                  src={accountState.avatar || MeImage}
                  alt="hình người dùng"
                />
              </div>
              <input
                accept="image/*"
                type="file"
                id="imgInp"
                className="inputfile"
                onChange={changeAvatar}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;

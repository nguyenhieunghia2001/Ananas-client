import React from "react";
import { Col, Row } from "reactstrap";
import MeImage from "../../../assets/images/me.jpg";

const Profile = () => {
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
                    <p>Tên</p>
                  </Col>
                  <Col lg="9">
                    <input
                      type="text"
                      name="username"
                      placeholder="Tên khách hàng"
                    />
                  </Col>
                </Row>
              </div>
              <div className="child__group">
                <Row>
                  <Col lg="3">
                    <p>Email</p>
                  </Col>
                  <Col lg="9">
                    <input type="email" name="email" placeholder="email" />
                  </Col>
                </Row>
              </div>
              <div className="child__group">
                <Row>
                  <Col lg="3">
                    <p>Số điện thoại</p>
                  </Col>
                  <Col lg="9">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Số điện thoại"
                    />
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
                <img src={MeImage} alt="hình người dùng" />
              </div>
                <button type="button" className="btn">Chọn ảnh</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;

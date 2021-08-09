import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.scss";

const PurchaseDetail = () => {
  return (
    <div className="purchasedetail">
      <Container>
        <header>
          <h2>THÔNG TIN ĐƠN HÀNG</h2>
        </header>
        <div className="progress-status"></div>
        <div className="info">
          <Row>
            <Col lg={6}>
              <div className="wrapper">
                <div className="top">
                  <h4>THÔNG TIN KHÁCH HÀNG</h4>
                </div>
                <div className="content">
                  <p>Họ tên: nguyen Trung Hieu</p>
                  <p>Điện thoại: 0947094475</p>
                  <p>Email: nghiadx2001@gmail.com</p>
                  <p>Địa chỉ: M15, cư xá Phú Lâm A, F12, Q6, HCM</p>
                  <p>Phường/xã: Phường 12</p>
                  <p>Quận/Huyện: Quận 6</p>
                  <p>Thành phố/Tỉnh: Hồ Chí Minh</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
            <div className="wrapper">
                <div className="top">
                  <h4>THÔNG TIN GIAO NHẬN</h4>
                </div>
                <div className="content">
                  <p>Họ tên: nguyen Trung Hieu</p>
                  <p>Điện thoại: 0947094475</p>
                  <p>Email: nghiadx2001@gmail.com</p>
                  <p>Địa chỉ: M15, cư xá Phú Lâm A, F12, Q6, HCM</p>
                  <p>Phường/xã: Phường 12</p>
                  <p>Quận/Huyện: Quận 6</p>
                  <p>Thành phố/Tỉnh: Hồ Chí Minh</p>
                </div>
              </div>
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PurchaseDetail;

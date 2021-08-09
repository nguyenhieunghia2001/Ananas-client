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
        <div className="progress-status">
          <div className="progress-1">ĐẶT HÀNG THÀNH CÔNG</div>
          <div className="progress-2">ĐẶT HÀNG THÀNH CÔNG</div>
          <div className="progress-3">ĐẶT HÀNG THÀNH CÔNG</div>
          <div className="progress-4">ĐẶT HÀNG THÀNH CÔNG</div>
        </div>
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
            <Col lg={6}>
              <div className="wrapper">
                <div className="top">
                  <h4>DANH SÁCH SẢN PHẨM</h4>
                </div>
                <div className="content">
                  <Row>
                    <Col lg={4}>
                      <div className="product-img">
                        <img
                          src="https://ananas.vn/wp-content/uploads/Pro_AV00011_1.jpg"
                          alt="product"
                        />
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="product-info">
                        <h6>Basas Hook N'Loop NE - Low Top - White</h6>
                        <div className="cont">
                          <span className="title">Giá: </span>
                          <span>520.000 VNĐ</span>
                        </div>
                        <div className="cont">
                          <span className="title">Size: </span>
                          <span>35</span>
                        </div>
                        <div className="cont">
                          <span className="title">Số lượng: </span>
                          <span>1</span>
                        </div>
                        <h6 className="total">520.000 VNĐ</h6>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="wrapper">
                <div className="top">
                  <h4>THANH TOÁN</h4>
                </div>
                <div className="content">
                  <div className="group">
                    <span>Trị giá đơn hàng:</span>
                    <p>520.000 VNĐ</p>
                  </div>
                  <div className="group">
                    <span>Giảm giá:</span>
                    <p>0 VND</p>
                  </div>
                  <div className="group">
                    <span>Phí giao hàng:</span>
                    <p>20.000 VND</p>
                  </div>
                  <div className="group">
                    <span>Phí thanh toán:</span>
                    <p>0 VND</p>
                  </div>
                </div>
                <div className="divider-img"></div>
                <div className="bottom">
                  <div className="group">
                    <span className="total">Tổng thanh toán:</span>
                    <p>540.000 VNĐ</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PurchaseDetail;

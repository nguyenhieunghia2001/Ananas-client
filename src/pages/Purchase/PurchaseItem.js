import React from "react";
import { Col, Row } from "reactstrap";
import { FaShippingFast } from "react-icons/fa";

const PurchaseItem = () => {
  return (
    <div className="purchase__item">
      <div className="header">
        <div className="detail">
          <FaShippingFast />
          <span>Chi tiết đơn hàng</span>
        </div>
        <div className="status">ĐÃ GIAO</div>
      </div>
      <div className="content">
        <Row>
          <Col lg="1" md={3} sm={3} xs={3}>
            <img
              src="https://cf.shopee.vn/file/4e1d8e7c7c9bd880f3b19a28346640fc_tn"
              alt="img product in purchase"
            />
          </Col>
          <Col lg="9" md={7} sm={7} xs={9}>
            <div className="info">
              <p>Oke</p>
              <span>x 1</span>
            </div>
          </Col>
          <Col lg="2" md={2} sm={2} xs={12}>
            <div className="price">
              <span>35.000 VNĐ</span>
            </div>
          </Col>
        </Row>
      </div>

      <div className="content">
        <Row>
          <Col lg="1" md={3} sm={3} xs={3}>
            <img
              src="https://cf.shopee.vn/file/4e1d8e7c7c9bd880f3b19a28346640fc_tn"
              alt="img product in purchase"
            />
          </Col>
          <Col lg="9" md={7} sm={7} xs={9}>
            <div className="info">
              <p>Oke</p>
              <span>x 1</span>
            </div>
          </Col>
          <Col lg="2" md={2} sm={2} xs={12}>
            <div className="price">
              <span>35.000 VNĐ</span>
            </div>
          </Col>
        </Row>
      </div>

      <div className="footer">
        <div className="total">
          <span>Tổng số tiền: </span>
          <h4>55.000 VNĐ</h4>
        </div>
      </div>
    </div>
  );
};

export default PurchaseItem;

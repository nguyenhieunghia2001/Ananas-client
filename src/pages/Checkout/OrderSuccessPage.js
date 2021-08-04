import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import OrderSuccesSvg from "../../assets/images/order-success.svg";

const OrderSuccessPage = () => {
  return (
    <Container>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <div className="order-success">
            <header>
              <div className="top">
                <div className="divider-soild"></div>
                <div className="content">
                  <h1>ĐẶT HÀNG</h1>
                  <p>THÀNH CÔNG</p>
                </div>
                <div className="divider-soild"></div>
              </div>
              <div className="bottom">
                <span>
                  Mã đơn hàng của bạn là W0222078, hãy lưu lại để tra cứu đơn
                  hàng khi cần thiết. Vui lòng check mail để xác nhận kiểm tra
                  thông tin hoặc tra cứu tình trạng đơn hàng tại đây. Gọi ngay
                  hotline 0947094472 trước khi đơn hàng được chuyển qua giao
                  nhận nếu bạn muốn thay đổi thông tin
                </span>
              </div>
              <div className="divider-img"></div>
            </header>
            <div className="body">
              <img src={OrderSuccesSvg} alt="svg order success" />
              <div className="content">
                <span>
                  CUỘC SỐ CÓ NHIỀU LỰA CHỌN. CẢM ƠN BẠN ĐÃ CHỌN ANANAS
                </span>
              </div>
              <div className="button-group">
                <Link to="/products" className="btn btn-ordersuccess">
                  TIẾP TỤC MUA HÀNG
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  );
};

export default OrderSuccessPage;

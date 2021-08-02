import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Checkbox } from "antd";
import "./component/ProductList";
import "./style.scss";
import ProductList from "./component/ProductList";

const CheckoutPage = () => {
  return (
    <Container>
      <div className="checkout">
        <Row>
          <Col lg={7}>
            <div className="checkout__left">
              <div className="header">
                <p>THÔNG TIN GIAO HÀNG</p>
              </div>
              <form className="orderForm">
                <div className="input-group">
                  <input type="text" name="username" placeholder="HỌ TÊN" />
                </div>
                <div className="input-group">
                  <input type="text" name="phone" placeholder="SỐ ĐIỆN THOẠI" />
                </div>
                <div className="input-group">
                  <input type="text" name="email" placeholder="EMAIL" />
                </div>
                <div className="input-group">
                  <input type="text" name="address" placeholder="ĐỊA CHỈ" />
                </div>
                <div className="input-group">
                  <Checkbox>
                    Cập nhật các thông tin mới nhất về chương trình từ Ananas
                  </Checkbox>
                </div>
              </form>
              <div className="shipping">
                <div className="header">
                  <p>PHƯƠNG THỨC GIAO HÀNG</p>
                </div>
                <div className="shipping__info">
                  <Checkbox>
                    Tốc độ tiêu chuẩn (từ 2 - 5 ngày làm việc)
                  </Checkbox>
                  <h5 className="charge">40.000 VND</h5>
                </div>
              </div>
              <div className="payment">
                <div className="header">
                  <p>PHƯƠNG THỨC THANH TOÁN</p>
                </div>
                <div className="payment__info">
                  <div className="check-group">
                    <Checkbox>Thanh toán trực tiếp khi giao hàng</Checkbox>
                  </div>
                  <div className="check-group">
                    <Checkbox>
                      Thanh toán bằng thẻ quốc tế và nội địa (ATM)
                    </Checkbox>
                  </div>
                  <div className="check-group">
                    <Checkbox>Thanh toán bằng ví MoMo</Checkbox>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="checkout__right">
              <div className="header">
                <h3>ĐƠN HÀNG</h3>
              </div>
              <div className="divider-soild"></div>
              <ProductList />
              <div className="divider-img"></div>
              <div className="order__info">
                <div className="item-group">
                  <span className="title">Đơn hàng</span>
                  <span className="content">1.010.000 VND</span>
                </div>
                <div className="item-group">
                  <span className="title">Giảm</span>
                  <span className="content">- 0 VND</span>
                </div>
                <div className="item-group">
                  <span className="title">Phí vận chuyển</span>
                  <span className="content">0 VND</span>
                </div>
                <div className="item-group">
                  <span className="title">Phí thanh toán</span>
                  <span className="content">0 VND</span>
                </div>
              </div>
              <div className="divider-img"></div>
              <div className="totalPrice">
                <span className="title">TỔNG CỘNG</span>
                <span className="content">1.010.000 VND</span>
              </div>
              <button className="btn btn-checkout">HOÀN TẤT ĐẶT HÀNG</button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CheckoutPage;

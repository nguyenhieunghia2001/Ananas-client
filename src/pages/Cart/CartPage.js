import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductListCart from "../../components/CartAndLove/ProductList";
import { Link } from "react-router-dom";
import "./style.scss";

const CartPage = () => {
  return (
    <Container>
      <div className="cart">
        <Row>
          <Col lg="8">
            <div className="cart__title">GIỎ HÀNG</div>
            <ProductListCart />
            <div className="divider-soild"></div>
            <div className="love__btn-group">
              <Row>
                <Col lg="6">
                  <div className="btn btn-love">XÓA HẾT</div>
                </Col>
                <Col lg="6">
                  <Link
                    to="/"
                    className="btn btn-love"
                    style={{ float: "right" }}
                  >
                    TIẾP TỤC MUA HÀNG
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="4">
            <div className="cart__box">
              <div className="cart__box-title">ĐƠN HÀNG</div>
              <div className="divider-soild"></div>
              <div className="cart__box-price--group">
                <div className="cart__box-price">
                  <p>Đơn hàng</p>
                  <p>3.005.000 VND</p>
                </div>
                <div className="cart__box-price">
                  <p>Giảm</p>
                  <p>496.500 VND</p>
                </div>
              </div>
              <div className="divider-soild"></div>
              <div className="cart__box-totalPrice">
                <h5>TẠM TÍNH</h5>
                <h5>2.508.500 VND</h5>
              </div>
              <div className="cart__box-btn">
                <Link to="" className="btn btn-cartBig">
                  TIẾP TỤC THANH TOÁN
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CartPage;

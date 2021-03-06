import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductListCart from "../../components/CartAndLove/ProductList";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { convertStringtoMoney } from "../../utits/index";
import "./style.scss";

const CartPage = () => {
  const { CartState, loading } = useContext(CartContext);
  console.log(loading);
  return (
    <Container>
      <div className="cart">
        {Array.isArray(CartState?.products) && CartState?.products.length > 0 && (
          <Row>
            <Col lg="8" sm={12}>
              <div className="cart__title">GIỎ HÀNG</div>
              <ProductListCart
                products={CartState?.products}
                fromPage="CART-PAGE"
                key={CartState._id}
              />
              <div className="divider-soild"></div>
              <div className="love__btn-group">
                <Row >
                  <Col lg="6" sm={6} xs={12} >
                    <div className="btn btn-love">XÓA HẾT</div>
                  </Col>
                  <Col lg="6" sm={6} xs={12}>
                    <Link
                      to="/"
                      className="btn btn-love"
                      style={{float: 'right'}}
                    >
                      TIẾP TỤC MUA HÀNG
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="4" sm={12}>
              <div className="cart__box">
                <div className="cart__box-title">ĐƠN HÀNG</div>
                <div className="divider-soild"></div>
                <div className="cart__box-price--group">
                  <div className="cart__box-price">
                    <p>Đơn hàng</p>
                    <p>{convertStringtoMoney(CartState?.totalPrice())}</p>
                  </div>
                  <div className="cart__box-price">
                    <p>Giảm</p>
                    <p>0 VND</p>
                  </div>
                </div>
                <div className="divider-soild"></div>
                <div className="cart__box-totalPrice">
                  <h5>TẠM TÍNH</h5>
                  <h5>{convertStringtoMoney(CartState?.totalPrice())}</h5>
                </div>
                <div className="cart__box-btn">
                  <Link to="/checkout" className="btn btn-cartBig">
                    TIẾP TỤC THANH TOÁN
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        )}
        {(!CartState ||
          !CartState?.products ||
          CartState?.products.length < 1) && (
          <>
            <div className="love__title">
              <h4>GIỎ HÀNG CỦA BẠN</h4>
              <div className="divider-soild"></div>
            </div>
            <div className="love__empty">
              <p>Bạn không thích sản phẩm nào!!</p>
              <Link className="btn btn-love" to="/products">
                TIẾP TỤC MUA HÀNG
              </Link>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default CartPage;

import React from "react";
import { Row, Col } from "reactstrap";
import productImg from "../../assets/images/product/1.jpg";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./style.scss";
import { Link } from "react-router-dom";

const ProductItemCart = () => {
  return (
    <div className="prdCart__item">
      <Row>
        <Col lg="8">
          <div className="prdCart__left">
            <Row>
              <Col lg="3">
                <div className="prdCart__img">
                  <Link to="/products/id">
                    <img src={productImg} alt="prd" />
                  </Link>
                </div>
              </Col>
              <Col lg="9">
                <div className="prdCart__info">
                  <Link to="/products/id">
                    <h5>Invisible Socks Pack - DiscoverYou</h5>
                  </Link>
                  <span>
                    <strong>Giá: </strong>95.000 VNĐ
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="4">
          <div className="prdCart__right">
            <h5>95.000 VNĐ</h5>
            <p>Còn hàng</p>
            <button
              type="button"
              className="btn btn-cart btn-cart--noneBackground"
            >
              <AiOutlineShoppingCart />
            </button>
            <button type="button" className="btn btn-cart btn-cart--Background">
              <RiDeleteBin6Line />
            </button>
          </div>
        </Col>
        <div className="divider-img"></div>
      </Row>
    </div>
  );
};

export default ProductItemCart;

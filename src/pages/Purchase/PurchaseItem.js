import React from "react";
import { Col, Row } from "reactstrap";
import { FaShippingFast } from "react-icons/fa";
import { convertStringtoMoney } from "../../utits/index";
import { Link } from "react-router-dom";

const PurchaseItem = ({ purchase }) => {
  return (
    <div className="purchase__item">
      <div className="header">
        <Link to={`/purchase/detail?id=${purchase?._id}`} className="detail">
          <FaShippingFast />
          <span>Chi tiết đơn hàng</span>
        </Link>
        <div className="status">ĐÃ GIAO</div>
      </div>
      <div className="content">
        {purchase &&
          purchase?.products?.map((product) => (
            <div className="product__item" key={product?._id}>
              <Row >
                <Col lg="1" md={3} sm={3} xs={3}>
                  <img
                    src={product?.product?.images[0].urlPublic}
                    alt="img product in purchase"
                  />
                </Col>
                <Col lg="9" md={7} sm={7} xs={9}>
                  <div className="info">
                    <p>{product?.product?.name}</p>
                    <div className="cont">
                      <span>
                        <strong>Size: </strong>x {product?.size}
                      </span>
                      <span>
                        <strong>Số lượng: </strong>x {product?.quantity}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg="2" md={2} sm={2} xs={12}>
                  <div className="price">
                    <span>
                      {product && convertStringtoMoney(product?.total)}
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
      </div>
      <div className="footer">
        <div className="total">
          <span>Tổng số tiền: </span>
          <h4>{purchase && convertStringtoMoney(purchase?.totalPrice)}</h4>
        </div>
      </div>
    </div>
  );
};

export default PurchaseItem;

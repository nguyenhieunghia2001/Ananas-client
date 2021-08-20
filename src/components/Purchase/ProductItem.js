import React from "react";
import { Col, Row } from "reactstrap";
import { convertStringtoMoney } from "../../utits";
import { CLOUDINARY_LINK } from "../../utits/base";

const ProductItem = ({product, fromPage}) => {
  return (
    <Row>
      <Col lg={fromPage ? 2 : 1} md={3} sm={3} xs={3}>
        <img
          src={`${CLOUDINARY_LINK}${product?.product?.images[0].urlPublic}`}
          alt="img product in purchase"
        />
      </Col>
      <Col lg={fromPage ? 8 : 9} md={7} sm={7} xs={9}>
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
          <span>{product && convertStringtoMoney(product?.total)}</span>
        </div>
      </Col>
    </Row>
  );
};
export default ProductItem;

import React from "react";
import "./style.scss";
import { Row, Col } from "reactstrap";
import ProductItemBasic from "./ProductItemBasic";

const ProductRight = ({ products }) => {
  // console.log(Array.isArray(products));
  return (
    <Row>
      {products.map((product) => (
        <Col lg="4" style={{ marginBottom: "30px", padding: "0" }} key={product._id}>
          <ProductItemBasic product={product} />
        </Col>
      ))}
    </Row>
  );
};
export default ProductRight;

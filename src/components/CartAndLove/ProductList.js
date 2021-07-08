import React from "react";
import { Row, Col } from "reactstrap";
import productImg from "../../assets/images/product/1.jpg";
import "./style.scss";
import ProductItemCart from "./ProductItem";

const ProductListCart = () => {
  return (
    <div className="prdCart">
      <ProductItemCart />
      <ProductItemCart />
    </div>
  );
};

export default ProductListCart;

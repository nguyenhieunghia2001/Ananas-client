import React from "react";
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

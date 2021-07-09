import React from "react";
import ProductItem from "./ProductItem";
import "../style.scss";

const ProductListCart = () => {
  return (
    <div className="products">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductListCart;

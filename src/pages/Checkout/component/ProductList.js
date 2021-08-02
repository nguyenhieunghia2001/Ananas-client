import React from "react";
import './ProductItem'
import ProductItem from "./ProductItem";

const ProductList = () => {
  return <div className="product-list">
    <ProductItem />
    <ProductItem />
  </div>;
};

export default ProductList;

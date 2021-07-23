import React from "react";
import ProductItem from "./ProductItem";
import "../style.scss";

const ProductListCart = ({ products }) => {
  return (
    <div className="products">
      {products &&
        Array.isArray(products) &&
        products.map((prd) => <ProductItem cartProduct={prd} key={prd.product?._id} />)}
    </div>
  );
};

export default ProductListCart;

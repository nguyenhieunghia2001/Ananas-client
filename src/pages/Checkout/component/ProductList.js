import React, { useContext } from "react";
import "./ProductItem";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products &&
        products.map((product) => (
          <div key={product?.product?._id}>
            <ProductItem product={product} />
          </div>
        ))}
    </div>
  );
};

export default ProductList;

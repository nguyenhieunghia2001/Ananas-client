import React from "react";
import "./style.scss";
import ProductItemCart from "./ProductItem";

const ProductListCart = ({ products, fromPage }) => {
  return (
    <div className="prdCart">
      {products &&
        Array.isArray(products) &&
        products.map((prd, index) => (
          <div className="prdCart__item" key={prd?._id}>
            <ProductItemCart product={prd} fromPage={fromPage} />
            {index < products.length - 1 && <div className="divider-img"></div>}
          </div>
        ))}
    </div>
  );
};

export default ProductListCart;

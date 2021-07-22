import React from "react";
import "./style.scss";
import ProductItemCart from "./ProductItem";

const ProductListCart = ({ products, fromPage }) => {
  return (
    <div className="prdCart">
      {products &&
        Array.isArray(products) &&
        products.map((prd, index) => (
          <div
            key={fromPage === "CART-PAGE" ? prd.product?._id : prd._id}
            className="prdCart__item"
          >
            <ProductItemCart product={prd} fromPage={fromPage} key={prd?._id} />
            {index < products.length - 1 && <div className="divider-img"></div>}
          </div>
        ))}
    </div>
  );
};

export default ProductListCart;

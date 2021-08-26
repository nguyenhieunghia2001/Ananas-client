import React from "react";
import {convertStringtoMoney} from '../../../utits/index'

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      {/* <img src={ImgTest} alt="img" /> */}
      <div className="info">
        <div className="top">
          <span className="name">{product?.product?.name}</span>
          
        </div>
        <div className="bottom">
          <div className="size">Size: {product?.size}</div>
          <span className="quantity">x {product?.quantity}</span>
          <span className="price">{product && convertStringtoMoney(product?.total())}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

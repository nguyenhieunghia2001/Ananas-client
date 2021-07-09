import React from "react";
import productImg from "../../../assets/images/product/1.jpg";
import "../style.scss";

const ProductItemCart = () => {
  return (
    <div className="products__item">
      <div className="products__img">
        <img src={productImg} alt="product" />
      </div>
      <div className="products__info">
        <h6>Invisible Socks Pack - DiscoverYou</h6>
        <p>264.000 VND</p>
        <div className="products__info-font">
          <span>Size</span>
          <span>34</span>
        </div>
        <div className="products__info-font">
          <span>Số lượng</span>
          <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCart;

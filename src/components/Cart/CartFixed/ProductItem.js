import React from "react";
import { convertStringtoMoney } from "../../../utits/index";
import { CLOUDINARY_LINK } from "../../../utits/base";
import "../style.scss";

const ProductItemCart = ({cartProduct}) => {
  const product = cartProduct.product;
  return (
    <div className="products__item">
      <div className="products__img">
        <img src={`${CLOUDINARY_LINK}${product?.images[0].urlPublic}`} alt="product" />
      </div>
      <div className="products__info">
        <h6>{product.name}</h6>
        <p>{convertStringtoMoney(product?.price)}</p>
        <div className="products__info-font">
          <span>Size</span>
          <span>{cartProduct?.size}</span>
        </div>
        <div className="products__info-font">
          <span>Số lượng</span>
          <span>{cartProduct?.quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCart;

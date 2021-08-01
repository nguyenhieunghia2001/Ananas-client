import React from "react";
import productImg from "../../assets/images/product/1.jpg";
import "./style.scss";
import { Link } from "react-router-dom";
import { convertStringtoMoney } from "../../utits";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <div className="thumbnail">
      <div className="thumbnail__img">
        <img src={productImg} alt="sản phẩm" />
      </div>
      <div className="thumbnail__caption">
        <h4 className="thumbnail__caption-name">
          <Link to="">{product?.name}</Link>
        </h4>
        <p className="thumbnail__caption-color">{product?.colors?.name}</p>
        <h4 className="thumbnail__caption-price">
          <Link to="">
            {product && convertStringtoMoney(product.price)}
          </Link>
        </h4>
      </div>
    </div>
  );
};
export default ProductItem;

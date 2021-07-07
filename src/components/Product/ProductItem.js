import React from "react";
import productImg from "../../assets/images/product/1.jpg";
import "./style.scss";
import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <div className="thumbnail">
      <div className="thumbnail__img">
        <img src={productImg} alt="sản phẩm" />
      </div>
      <div className="thumbnail__caption">
        <h4 className="thumbnail__caption-name">
          <Link to="">Baseball Cap - Be Positive</Link>
        </h4>
        <p className="thumbnail__caption-color">Pink</p>
        <h4 className="thumbnail__caption-price">
          <Link to="">275.000 VND</Link>
        </h4>
      </div>
    </div>
  );
};
export default ProductItem;

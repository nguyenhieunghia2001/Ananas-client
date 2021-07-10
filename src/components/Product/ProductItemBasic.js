import React from "react";
import productImg from "../../assets/images/product/1.jpg";
import "./style.scss";
import { Link } from "react-router-dom";
import ProductLove from "../LoveList/ProductLove";

const ProductItem = ({product}) => {
  console.log(product);
  return (
    <div className="thumbnail">
      <div className="thumbnail__bg">
        <img src={productImg} alt="sản phẩm" />
        <Link to="" className="btn btn-thumbnail">
          MUA NGAY
        </Link>
        <div className="thumbnail__bg-icon">
          <ProductLove />
        </div>
        {/* <AiFillHeart className="thumbnail__bg-icon" /> */}
      </div>
      <div className="thumbnail__caption">
        <p className="thumbnail__caption-type">{product.statuses.name}</p>
        <div className="divider-img"></div>
        <h4 className="thumbnail__caption-name">
          <Link to="/products/id">{product.name}</Link>
        </h4>
        <p className="thumbnail__caption-color">{product.colors.name}</p>
        <h4 className="thumbnail__caption-price">{product.price} VND</h4>
      </div>
    </div>
  );
};
export default ProductItem;

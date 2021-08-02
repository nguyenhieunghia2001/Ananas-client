import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import ProductLove from "../LoveList/ProductLove";
import { convertStringtoMoney } from "../../utits/index";

const ProductItem = ({ product }) => {
  return (
    <div className="thumbnail">
      <div className="thumbnail__bg">
        <img
          src={product?.images[0]?.urlPublic}
          alt="sản phẩm"
          className="thumbnail__bg-img"
        />
        <img
          src={product?.images[1]?.urlPublic || product?.images[0]?.urlPublic}
          alt="sản phẩm"
          className="thumbnail__bg-img--hover"
        />
        <Link to={`/product/${product._id}`} className="btn btn-thumbnail">
          MUA NGAY
        </Link>
        <div className="thumbnail__bg-icon">
          <ProductLove product={product} />
        </div>
        {/* <AiFillHeart className="thumbnail__bg-icon" /> */}
      </div>
      <div className="thumbnail__caption">
        <p className="thumbnail__caption-type">{product.statuses.name}</p>
        <div className="divider-img"></div>
        <h4 className="thumbnail__caption-name">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h4>
        <p className="thumbnail__caption-color">{product.colors.name}</p>
        <h4 className="thumbnail__caption-price">
          {convertStringtoMoney(product.price)}
        </h4>
      </div>
    </div>
  );
};
export default ProductItem;

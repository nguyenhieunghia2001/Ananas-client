import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { convertStringtoMoney } from "../../utits";

const ProductItem = ({ product }) => {
  return (
    <div className="thumbnail">
      <Link to={`/product/${product?._id}`}>
        <div className="thumbnail__img">
          <img src={product?.images[0]?.urlPublic} alt="sản phẩm" />
        </div>
        <div className="thumbnail__caption">
          <h4 className="thumbnail__caption-name">{product?.name}</h4>
          <p className="thumbnail__caption-color">{product?.colors?.name}</p>
          <h4 className="thumbnail__caption-price">
            {product && convertStringtoMoney(product.price)}
          </h4>
        </div>
      </Link>
    </div>
  );
};
export default ProductItem;

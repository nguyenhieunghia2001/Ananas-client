import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      {/* <img src={ImgTest} alt="img" /> */}
      <div className="info">
        <div className="top">
          <span className="name">Basas Simple Life NE - Low Top - White</span>
          <span className="price">490.000 VND</span>
        </div>
        <div className="bottom">
          <div className="size">Size: 35</div>
          <span className="quantity">x 1</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import React, { useState, useEffect } from "react";
import "../style.scss";
import { Row } from "reactstrap";
import PorductBannerImg from "../../../assets/images/prd-banner.jpg";
import ProductList from "../../../components/Product/ProductList";
import { getAllProduct } from "../../../api/ProductApi";

const ProductRight = ({products}) => {
  return (
    <div className="product-right">
      <Row>
        <div className="product-right--banner">
          <img src={PorductBannerImg} alt="prd right banner" />
        </div>
      </Row>
      {/* {productsState && <ProductList products={productsState}/>} */}
      <ProductList products={products} />
      {/* <ProductList /> */}
    </div>
  );
};
export default ProductRight;

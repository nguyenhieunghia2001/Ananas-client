import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { convertStringtoMoney } from "../../utits/index";
import { Link } from "react-router-dom";
import ProductItem from "../../components/Purchase/ProductItem";

const PurchaseItem = ({ purchase }) => {
  return (
    <div className="purchase__item">
      <div className="header">
        <Link to={`/purchase/detail?id=${purchase?._id}`} className="detail">
          <FaShippingFast />
          <span>Chi tiết đơn hàng</span>
        </Link>
        <div className="status">ĐÃ GIAO</div>
      </div>
      <div className="content">
        {purchase &&
          purchase?.products?.map((product) => (
            <div className="product__item" key={product?._id}>
              <ProductItem product={product} />
            </div>
          ))}
      </div>
      <div className="footer">
        <div className="total">
          <span>Tổng số tiền: </span>
          <h4>{purchase && convertStringtoMoney(purchase?.totalPrice)}</h4>
        </div>
      </div>
    </div>
  );
};

export default PurchaseItem;

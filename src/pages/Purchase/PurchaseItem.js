import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { convertStringtoMoney } from "../../utits/index";
import { Link } from "react-router-dom";
import ProductItem from "../../components/Purchase/ProductItem";

const PurchaseItem = ({ purchase }) => {
  const getStatusName = () => {
    if (purchase?.status?.find((item) => item.name === "-1")) return "ĐÃ HỦY";
    const pos = purchase?.status?.reduce(
      (result, item) => (+item.name > result ? +item.name : result),
      0
    );
    switch (pos) {
      case 0:
        return "ĐÃ ĐẶT HÀNG";
      case 1:
        return "ĐANG GIA0";
      case 2:
        return "ĐÃ GIAO";
      default:
        break;
    }
  };
  return (
    <div className="purchase__item">
      <div className="header">
        <Link to={`/purchase/detail?id=${purchase?._id}`} className="detail">
          <FaShippingFast />
          <span>Chi tiết đơn hàng</span>
        </Link>
        <div className="status">{getStatusName()}</div>
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

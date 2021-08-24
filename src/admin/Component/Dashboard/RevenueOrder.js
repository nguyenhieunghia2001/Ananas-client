import React, { useEffect, useState } from "react";
import { GiSmallFire } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { BsFileCheck } from "react-icons/bs";
import { RiEmotionHappyLine, RiEmotionUnhappyLine } from "react-icons/ri";
import { getCountStatusOrder } from "../../../api/orderApi";

const RevenueOrder = () => {
  const [statusOrder, setStatusOrder] = useState({
    orderSuccess: 0,
    cancel: 0,
    shipping: 0,
    shippingSuccess: 0,
    total: function () {
      return this.orderSuccess + this.cancel + this.shipping + this.shippingSuccess
    },
  });
  useEffect(() => {
    async function fetch() {
      const res = await getCountStatusOrder();
      setStatusOrder((pre) => {
        return {
          ...pre,
          orderSuccess: res.statistical?.orderSuccess,
          cancel: res.statistical?.cancel,
          shipping: res.statistical?.shipping,
          shippingSuccess: res.statistical?.shippingSuccess,
        };
      });
    }
    fetch();
  }, []);
  return (
    <div className="revenue-order">
      <ul>
        <li>
          <div className="cont">
            <h3 className="top">{statusOrder.total()}</h3>
            <p className="bottom">Tổng đơn hàng</p>
          </div>
          <div className="icon">
            <GiSmallFire />
          </div>
        </li>
        <li>
          <div className="cont">
            <h3 className="top">{statusOrder?.orderSuccess}</h3>
            <p className="bottom">Giao hàng thành công</p>
          </div>
          <div className="icon">
            <BsFileCheck />
          </div>
        </li>
        <li>
          <div className="cont">
            <h3 className="top">{statusOrder?.shipping}</h3>
            <p className="bottom">Đang giao</p>
          </div>
          <div className="icon">
            <FaShippingFast />
          </div>
        </li>
        <li>
          <div className="cont">
            <h3 className="top">{statusOrder?.cancel}</h3>
            <p className="bottom">Đã hủy</p>
          </div>
          <div className="icon">
            <RiEmotionUnhappyLine />
          </div>
        </li>
        <li>
          <div className="cont">
            <h3 className="top">{statusOrder?.shippingSuccess}</h3>
            <p className="bottom">Đã đặt hàng</p>
          </div>
          <div className="icon">
            <RiEmotionHappyLine />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RevenueOrder;

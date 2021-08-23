import React from "react";
import { GiSmallFire } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { BsFileCheck } from "react-icons/bs";
import { RiEmotionHappyLine, RiEmotionUnhappyLine } from "react-icons/ri";

const RevenueOrder = () => {
  return (
    <div className="revenue-order">
      <ul>
        <li>
          <div className="cont">
            <h3 className="top">120</h3>
            <p className="bottom">Tổng đơn hàng</p>
          </div>
          <div className="icon">
            <GiSmallFire />
          </div>
        </li>
        <li>
          <div className="cont">
            <h3 className="top">50</h3>
            <p className="bottom">Giao hàng thành công</p>
          </div>
          <div className="icon">
            <BsFileCheck />
          </div>
        </li>
        <li>
          <div className="cont">
            <h3 className="top">30</h3>
            <p className="bottom">Đang giao</p>
          </div>
          <div className="icon">
            <FaShippingFast />
          </div>
        </li>
        <li>
          <div className="cont">
            <h3 className="top">53</h3>
            <p className="bottom">Đã hủy</p>
          </div>
          <div className="icon">
            <RiEmotionUnhappyLine />
          </div>
        </li>
        <li>
          <div className="cont">
            <h3 className="top">17</h3>
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

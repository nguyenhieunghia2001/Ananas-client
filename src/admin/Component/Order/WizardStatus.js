import React from "react";

const WizardStatus = () => {
  return (
    <div className="wizard-status">
      <ul>
        <li className="tab active">
          <span>Đặt hàng thành công</span>
          <span className="time">7h45p, 20-10-2000</span>
        </li>
        <li className="tab">
          <span>Đơn hàng đã hủy</span>
        </li>
        <li className="tab">
          <span>Đang giao hàng</span>
        </li>
        <li className="tab">
          <span>Giao hàng thành công</span>
        </li>
      </ul>
    </div>
  );
};

export default WizardStatus;

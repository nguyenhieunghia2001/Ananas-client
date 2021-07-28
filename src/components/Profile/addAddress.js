import React from "react";
import "./style.scss";

const Add_Address = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__title">
        <h4>Địa Chỉ Mới</h4>
      </div>
      <div className="wrapper__cont">
        <div className="nameandphone">
          <input className="txtname" name="name" placeholder="Họ và tên" />
          <input
            className="txtphone"
            name="phone"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="select-address">
          <div className="group">
            <input
              value=""
              placeholder="Tỉnh/ Thành phố, Quận/Huyện, Phường/Xã"
              readOnly
            />
            <span>+</span>
          </div>
          <div className="cont">
            <div className="header">
              <div className="header-item header-item--active city">
                Tỉnh/ Thành phố
              </div>
              <div className="header-item district">Quận/Huyện</div>
              <div className="header-item wards">Phường/Xã</div>
            </div>
            <div className="body">
              <ul>
                <li className="option-active">Tình tiền giag</li>
                <li>Tình tiền giag</li>
                <li>Tình tiền giag</li>
                <li>Tình tiền giag</li>
                <li>Tình tiền giag</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="btn__group">
        <button className="btn btn-pre btn-sm">TRỞ LẠI</button>
        <button className="btn btn-complete btn-sm">HOÀN THÀNH</button>
      </div>
    </div>
  );
};

export default Add_Address;

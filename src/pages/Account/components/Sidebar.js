import React, { useContext } from "react";
import { AiFillHeart, AiOutlineUser } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import MeImage from "../../../assets/images/me.jpg";
import { AccountContext } from "../../../context/AccountContext";
import {CLOUDINARY_LINK} from '../../../utits/base'

const SidebarAccount = () => {
  const { userCurrentState } = useContext(AccountContext);
  return (
    <div className="sidebar sidebar-account">
      <div className="sidebar__top">
        <div className="sidebar__top-img">
          <img src={`${CLOUDINARY_LINK}${userCurrentState.public_Id}` || MeImage} alt="" />
        </div>
        <div>
          <h5>{userCurrentState?.username}</h5>
          <span>Sửa hồ sơ</span>
        </div>
      </div>
      <div className="divider-img"></div>
      <div className="sidebar__options">
        <ul className="list-parent">
          <li>
            <div className="item-group">
              <AiOutlineUser className="icon-user" />
              <span>Tài khoản của tôi</span>
              <ul className="list-child">
                <li>
                  <NavLink to="/account/profile" activeClassName="active">
                    Hồ sơ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/account/address" activeClassName="active">
                    Địa chỉ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/account/password" activeClassName="active">
                    Mật khẩu
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="/account/changepass"
              className="item-group"
              activeClassName="active"
            >
              <FaClipboardList className="icon-order" />
              <span>Đơn mua</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/lovelist"
              className="item-group"
              activeClassName="active"
            >
              <AiFillHeart className="icon-like" />
              <span>Yêu thích</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarAccount;

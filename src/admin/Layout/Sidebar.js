import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";

const Sidebar = () => {
  return (
    <>
      <div className="sidebaradmin">
        <ul>
          <li>
            <NavLink to="/admin/dashboard" activeClassName="active">
              <FiHome />
              <p>Trang chính</p>
            </NavLink>
          </li>
          <li>
            <NavLink  to="/admin/product" activeClassName="active">
              <AiOutlineProfile />
              <p>Sản phẩm</p>
            </NavLink>
          </li>
          <li>
            <NavLink  to="/admin/customer" activeClassName="active">
              <RiCustomerService2Fill />
              <p>Khách hàng</p>
            </NavLink>
          </li>
          <li>
            <NavLink  to="/admin/order" activeClassName="active">
              <FiShoppingCart />
              <p>Đơn hàng</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

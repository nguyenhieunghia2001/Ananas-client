import React, { useState } from "react";
import "../style.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ExpanderSidebar from "./ExpanderSidebar";

const Sidebar = () => {
  const [toggleCatState, setToggleCatState] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <ul className="nav nav-tabs">
          <li className="nav-tabs-active">
            <Link to="">TẤT CẢ</Link>
          </li>
          <li className="type-divider"></li>
          <li>
            <Link to="">NAM</Link>
          </li>
          <li className="type-divider"></li>
          <li>
            <Link to="">NỮ</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__divider"></div>
      <div className="sidebar__pane">
        <ul className="nav nav-stacked">
          <li className="active">Giày</li>
          <li>Nữa trên</li>
          <li>Phụ kiện</li>
        </ul>
      </div>
      <div className="sidebar__divider"></div>
      <div className="sidebar__expander">
        <ExpanderSidebar title='DÒNG SẢN PHẨM'>
          <ul className="nav nav-stacked">
            <li className="active">Giày</li>
            <li>Nữa trên</li>
            <li>Phụ kiện</li>
          </ul>
        </ExpanderSidebar>
      </div>
      <div className="divider-img"></div>
      <div className="sidebar__expander">
        <ExpanderSidebar title='TRẠNG THÁI'>
          <ul className="nav nav-stacked">
            <li className="active">Giày</li>
            <li>Nữa trên</li>
            <li>Phụ kiện</li>
          </ul>
        </ExpanderSidebar>
      </div>
    </div>
  );
};

export default Sidebar;

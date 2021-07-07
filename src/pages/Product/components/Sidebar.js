import React, { useState } from "react";
import "../style.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <div className="sidebar__cat">
        <div
          className={toggleCatState ? "sidebar__title sidebar__title-open" : "sidebar__title"}
          onClick={() => setToggleCatState(!toggleCatState)}
        >
          DÒNG SẢN PHẨM
          <span className="caret">
            {toggleCatState ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <ul className="nav nav-stacked" style={{display: toggleCatState ? "block" : "none"}}>
          <li className="active">Giày</li>
          <li>Nữa trên</li>
          <li>Phụ kiện</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

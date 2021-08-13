import React from "react";
import { FiMenu, FiSettings, FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/images/logo.svg";
import "./style.scss";

const Header = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div className={`navbar ${!openSidebar && "navbar-close"}`}>
      <div className="logo ">
        <img src={Logo} alt="logo ananas" />
        <h4>ANANAS</h4>
      </div>
      <div className="navbar__menu">
        <div className="left">
          <div className="icon" onClick={() => setOpenSidebar(!openSidebar)}>
            <FiMenu />
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <div className="account">
                <img
                  src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/49597581_271934290163278_6792656998153322496_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=174925&_nc_ohc=ObbxIwwBKOEAX8u2BNj&_nc_ht=scontent-hkg4-1.xx&oh=64d49f64a4702c66f0410d65511220fc&oe=613A5B2D"
                  alt="account img"
                />
                <span>
                  Nghĩa dx
                  <FiChevronDown />
                </span>
              </div>
            </li>
            <li>
              <div className="icon">
                <FiSettings />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

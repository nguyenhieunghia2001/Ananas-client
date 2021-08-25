import React, { useContext } from "react";
import "../header.scss";
import { Container } from "reactstrap";
import LogoSvg from "../../../../assets/images/logo.svg";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AccountContext } from "../../../../context/AccountContext";
import MeImage from "../../../../assets/images/me.jpg";
import { CLOUDINARY_LINK } from "../../../../utits/base";
import { logoutAuth } from "../../../../api/authApi";

const Navbar = () => {
  const { userCurrentState, resetUser } = useContext(AccountContext);
  const handleLogout = async () => {
    await logoutAuth();
    resetUser();
  };
  return (
    <Container>
      <div className="nav nav-big d-flex justify-content-between align-items-center">
        <div className="nav__logo">
          <Link to="/">
            <img src={LogoSvg} alt="logo Ananas" />
          </Link>
        </div>
        <div className="nav__menu d-flex">
          <div className="nav__menu-item d-flex align-items-end">
            <h4>
              <Link to="/products">SẢN PHẨM</Link>
            </h4>
            <FaChevronDown className="icon" />
          </div>
          <div className="nav__menu-item d-flex align-items-end">
            <h4>
              <Link to="/products?gender=MALE">NAM</Link>
            </h4>
            <FaChevronDown className="icon" />
          </div>
          <div className="nav__menu-item d-flex align-items-end">
            <h4>
              <Link to="/products?gender=FEMALE">NỮ</Link>
            </h4>

            <FaChevronDown className="icon" />
          </div>
          <div className="nav__menu-item d-flex align-items-end">
            <h4>SALE OFF</h4>
          </div>
        </div>
        <div className="nav__search">
          <form>
            <div className="nav__search-form">
              <FiSearch className="icon" />
              <input type="text" placeholder="Tìm kiếm" />
            </div>
          </form>
        </div>
        {userCurrentState.user.username && (
          <div className="nav__account">
            <div className="nav__account-avatar">
              <img
                src={
                  userCurrentState.user.public_Id
                    ? `${CLOUDINARY_LINK}${userCurrentState.user.public_Id}`
                    : MeImage
                }
                alt="ảnh đại diện"
              />
            </div>
            <div className="nav__account-select">
              <h4>{userCurrentState.user.username}</h4>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/account/profile">Tài khoản</Link>
                  </li>
                  <li>
                    <div onClick={handleLogout} >Đăng Xuất</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;

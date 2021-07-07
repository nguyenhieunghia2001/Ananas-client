import React from "react";
import "../header.scss";
import { Container } from "reactstrap";
import LogoSvg from "../../../../assets/images/logo.svg";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <div className="nav d-flex justify-content-between align-items-center">
        <div className="nav__logo">
          <img src={LogoSvg} alt="logo Ananas" />
        </div>
        <div className="nav__menu d-flex">
          <div className="nav__menu-item d-flex align-items-end">
            <h4><Link to="/products">SẢN PHẨM</Link></h4>
            <FaChevronDown className="icon" />
          </div>
          <div className="nav__menu-item d-flex align-items-end">
            <h4>NAM</h4>
            <FaChevronDown className="icon" />
          </div>
          <div className="nav__menu-item d-flex align-items-end">
            <h4>NỮ</h4>
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
      </div>
    </Container>
  );
};

export default Navbar;

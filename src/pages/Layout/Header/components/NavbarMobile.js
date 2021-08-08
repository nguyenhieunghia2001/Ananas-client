import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiFillHeart,
} from "react-icons/ai";
import { RiSearchEyeLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import LogoSvg from "../../../../assets/images/logo.svg";

const NavbarMobile = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbarmobile">
      <Container fluid={true}>
        <Row>
          <Col sm={4} xs={4}>
            <div className="logo">
              <Link to="/">
                <img src={LogoSvg} alt="logo Ananas" />
              </Link>
            </div>
          </Col>
          <Col sm={5} xs={5}>
            <div className="list">
              <div className="icon">
                <Link to="">
                  <FiSearch />
                </Link>
              </div>
              <div className="icon">
                <Link to="">
                  <GoLocation />
                </Link>
              </div>
              <div className="icon">
                <Link to="/cart">
                  <AiOutlineShoppingCart />
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={3} xs={3} style={{ paddingRight: "0" }}>
            <div className="menu-mobile" onClick={() => setToggle(!toggle)}>
              <div className="wrapper">
                {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {toggle && (
        <div className="menu-list">
          <div className="product">
            <ul>
              <li>
                <Link to="">TẤT CẢ</Link>
              </li>
              <li>
                <Link to="">NAM</Link>
              </li>
              <li>
                <Link to="">NỮ</Link>
              </li>
              <li>
                <Link to="">SALE OFF</Link>
              </li>
              <li>
                <Link to="">DiscoverYOU</Link>
              </li>
            </ul>
          </div>
          <div className="page">
            <ul>
              <li>
                <Link to="" className="menu-item--group">
                  <FaUserAlt className="icon" />
                  <span>Đăng nhập</span>
                </Link>
              </li>
              <li>
                <Link className="menu-item--group">
                  <AiFillHeart className="icon" />
                  <span>Yêu thích</span>
                </Link>
              </li>
              <li>
                <Link className="menu-item--group">
                  <GoLocation className="icon" />
                  <span>Tìm cửa hàng</span>
                </Link>
              </li>
              <li>
                <Link to="" className="menu-item--group">
                  <RiSearchEyeLine className="icon" />
                  <span>
                    <Link to="/purchase">Tra cứu đơn hàng</Link>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <p>MỌI NGƯỜI GỌI CHÚNG TÔI LÀ</p>
            <p>DỨA!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;

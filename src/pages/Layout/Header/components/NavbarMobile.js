import React from "react";
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
                <FiSearch />
              </div>
              <div className="icon">
                <GoLocation />
              </div>
              <div className="icon">
                <AiOutlineShoppingCart />
              </div>
            </div>
          </Col>
          <Col sm={3} xs={3} style={{ paddingRight: "0" }}>
            <div className="menu-mobile">
              <div className="wrapper">
                {/* <AiOutlineMenu /> */}
                <AiOutlineClose />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
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
              <Link className="menu-item--group">
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
                <span>Tra cứu đơn hàng</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <p>MỌI NGƯỜI GỌI CHÚNG TÔI LÀ</p>
          <p >DỨA!</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;

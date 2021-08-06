import React from "react";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import LogoSvg from "../../../../assets/images/logo.svg";

const NavbarMobile = () => {
  return (
    <div className="navbarmobile">
      <Container fluid={true} style={{ padding: "0" }}>
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
          <Col sm={3} xs={3}>
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
        <ul>
          <li>
            <Link to="">TẤT CẢ</Link>
          </li>
          <li>
            <div className="divider-img-navbar"></div>
          </li>
          <li>
            <Link to="">NAM</Link>
          </li>
          <li>
            <div className="divider-img-navbar"></div>
          </li>
          <li>
            <Link to="">NỮ</Link>
          </li>
          <li>
            <div className="divider-img-navbar"></div>
          </li>
          <li>
            <Link to="">SALE OFF</Link>
          </li>
          <li>
            <div className="divider-img-navbar"></div>
          </li>
          <li>
            <Link to="">DiscoverYOU</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;

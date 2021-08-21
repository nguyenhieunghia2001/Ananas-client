import React, { useContext, useState } from "react";
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
import { AccountContext } from "../../../../context/AccountContext";

const NavbarMobile = () => {
  const { userCurrentState } = useContext(AccountContext);
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
                <Link to="/products" onClick={() => setToggle(false)}>
                  <div>TẤT CẢ</div>
                </Link>
              </li>
              <li>
                <Link
                  to="/products?gender=MALE"
                  onClick={() => setToggle(false)}
                >
                  <div>NAM</div>
                </Link>
              </li>
              <li>
                <Link
                  to="/products?gender=FEMALE"
                  onClick={() => setToggle(false)}
                >
                  <div>NỮ</div>
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => setToggle(false)}>
                  <div>SALE OFF</div>
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => setToggle(false)}>
                  <div>DiscoverYOU</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="page">
            <ul>
              <li>
                <Link
                  to={
                    userCurrentState.user.username
                      ? "/account/profile"
                      : "/auth/login"
                  }
                  className="menu-item--group"
                  onClick={() => setToggle(false)}
                >
                  <FaUserAlt className="icon" />
                  {userCurrentState.user.username ? (
                    <span>{userCurrentState.user?.username}</span>
                  ) : (
                    <span>Đăng nhập</span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/love"
                  className="menu-item--group"
                  onClick={() => setToggle(false)}
                >
                  <AiFillHeart className="icon" />

                  <span>Yêu thích</span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="menu-item--group"
                  onClick={() => setToggle(false)}
                >
                  <GoLocation className="icon" />
                  <span>Tìm cửa hàng</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/purchases"
                  className="menu-item--group"
                  onClick={() => setToggle(false)}
                >
                  <RiSearchEyeLine className="icon" />
                  <span>Tra cứu đơn hàng</span>
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

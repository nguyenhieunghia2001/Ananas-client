import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { AiOutlineUser, AiFillHeart } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import MeImage from "../../assets/images/me.jpg";
import Profile from "./components/Profile";
import "./style.scss";

const AccountPage = () => {
  return (
    <Container>
      <div className="account">
        <Row>
          <Col lg="3">
            <div className="sidebar sidebar-account">
              <div className="sidebar__top">
                <div className="sidebar__top-img">
                  <img src={MeImage} alt="" />
                </div>
                <div>
                  <h5>Nghĩa dx</h5>
                  <span>Sửa hồ sơ</span>
                </div>
              </div>
              <div className="divider-img"></div>
              <div className="sidebar__options">
                <ul className="list-parent">
                  <li>
                    <Link to="" className="item-group active">
                      <AiOutlineUser className="icon-user"/>
                      <span>Tài khoản của tôi</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="item-group">
                      <FaClipboardList className="icon-order"/>
                      <span>Đơn mua</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="item-group">
                      <AiFillHeart className="icon-like"/>
                      <span>Yêu thích</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="9">
              <div className="account__cont">
                  <Profile />
              </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AccountPage;

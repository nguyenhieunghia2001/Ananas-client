import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "../style.scss";

const SidebarAccount = () => {
  return (
    <div className="nav__profile">
      <Row>
        <Col lg={4} md={4} sm={4} xs={4}>
          <NavLink to="/account/profile" activeClassName="active">
            <div>Hồ sơ</div>
          </NavLink>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4}>
          <NavLink to="/account/address" activeClassName="active">
            <div>Địa chỉ</div>
          </NavLink>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4}>
          <NavLink to="/account/password" activeClassName="active">
            <div>Mật khẩu</div>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default SidebarAccount;

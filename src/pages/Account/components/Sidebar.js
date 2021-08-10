import React, { useContext } from "react";
import { AiFillHeart, AiOutlineUser } from "react-icons/ai";
import { FaClipboardList, FaAddressBook } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";
import MeImage from "../../../assets/images/me.jpg";
import { AccountContext } from "../../../context/AccountContext";
import { CLOUDINARY_LINK } from "../../../utits/base";
import "../style.scss";

const SidebarAccount = () => {
  const { userCurrentState } = useContext(AccountContext);
  return (
    <div className="nav__account">
      {/* <div className="sidebar__top">
        <div className="sidebar__top-img">
          <img
            src={`${CLOUDINARY_LINK}${userCurrentState.public_Id}` || MeImage}
            alt=""
          />
        </div>
        <div>
          <h5>{userCurrentState?.username}</h5>
          <span>Sửa hồ sơ</span>
        </div>
      </div>
      <div className="divider-img"></div> */}
      {/* <div className="sidebar__options">
        <div className="nav-options"> */}
      {/* <div className="nav__account-item"> */}
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

      {/* </div> */}
      {/* <div className="nav__account-item"> */}

      {/* </div> */}
      {/* <div className="nav__account-item"> */}

      {/* </div> */}
    </div>

    //   </div>
    // </div>
  );
};

export default SidebarAccount;

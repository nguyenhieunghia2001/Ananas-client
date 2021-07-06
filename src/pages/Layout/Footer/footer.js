import React from "react";
import "./style.scss";
import { Container, Row, Col } from "reactstrap";
import StoreSvg from "../../../assets/images/Store.svg";
import LogoFooterImg from "../../../assets/images/Logo_Ananas_Footer.svg";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="foo">
      <Container fluid={true}>
        <Row>
          <Col lg="3">
            <div className="foo__store">
              <img src={StoreSvg} alt="Cửa hàng" />
              <div className="btn btn-search-shop">TÌM CỬA HÀNG</div>
            </div>
          </Col>
          <Col lg="9">
            <div className="foo__menu">
              <Row>
                <Col lg="3">
                  <div className="foo__item-title">SẢN PHẨM</div>
                  <ul className="foo__item-list">
                    <li>
                      <a href="javascript(0)">Giày Nam</a>
                    </li>
                    <li>
                      <a href="javascript(0)">Giày Nữ</a>
                    </li>
                    <li>
                      <a href="javascript(0)">Thời trang & Phụ kiện</a>
                    </li>
                    <li>
                      <a href="javascript(0)">Sale-off</a>
                    </li>
                  </ul>
                </Col>
                <Col lg="3">
                  <div className="foo__item-title">VỀ CÔNG TY</div>
                  <ul className="foo__item-list">
                    <li>
                      <a href="javascript(0)">Dứa tuyển dụng</a>
                    </li>
                    <li>
                      <a href="javascript(0)">Liên hệ nhượng quyền</a>
                    </li>
                    <li>
                      <a href="javascript(0)">Về Ananas</a>
                    </li>
                  </ul>
                </Col>
                <Col lg="3">
                  <div className="foo__item-title">HỖ TRỢ</div>
                  <ul className="foo__item-list">
                    <li>
                      <a href="javascript(0)">FAQs</a>
                    </li>
                    <li>
                      <a href="javascript(0)">Bảo mật thông tin</a>
                    </li>
                    <li>
                      <a href="javascript(0)">Chính sách chung</a>
                    </li>
                    <li>
                      <a href="javascript(0)">Tra cứu đơn hàng</a>
                    </li>
                  </ul>
                </Col>
                <Col lg="3">
                  <div className="foo__item-title">LIÊN HỆ</div>
                  <ul className="foo__item-list">
                    <li>
                      <a href="javascript(0)">Email góp ý</a>
                    </li>
                    <li>
                      <a href="javascript(0)">Hotline</a>
                    </li>
                    <li>
                      <a href="javascript(0)">0963 429 749</a>
                    </li>
                  </ul>
                </Col>
              </Row>

              <Row style={{ marginTop: "15px" }}>
                <Col lg="3">
                  <div className="foo__item-title">ANANAS SOCIAL</div>
                  <div className="foo__item-icon d-flex align-items-center">
                    <FaFacebookSquare />
                    <FaInstagramSquare />
                  </div>
                </Col>
                <Col lg="3">
                  <div className="foo__item-title">ĐĂNG KÝ NHẬN MAIL</div>
                  <div className="foo__item-form">
                    <input type="text" />
                    <a href="javascript(0)" className="">
                      <AiOutlineArrowRight />
                    </a>
                  </div>
                </Col>
                <Col lg="6 d-flex align-items-end">
                  <div className="foo__item-img ">
                    <img src={LogoFooterImg} alt="logo footer" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <span className="copyright">
            Copyright © 2021 Ananas. All rights reserved.
          </span>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

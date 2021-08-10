import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Expander from "../../../components/Properties/Expander";
import "./style.scss";

const FooterMobile = () => {
  return (
    <div className="footermobile">
      <Expander title="SẢN PHẨM">
        <ul>
          <li>
            <Link to="">Giày Nam</Link>
          </li>
          <li>
            <Link to="">Giày Nữ</Link>
          </li>
          <li>
            <Link to="">Thời Trang & Phụ Kiện</Link>
          </li>
          <li>
            <Link to="">Sale Off</Link>
          </li>
        </ul>
      </Expander>
      <Expander title="VỀ CÔNG TY">
        <ul>
          <li>
            <Link to="">Dứa tuyển dụng</Link>
          </li>
          <li>
            <Link to="">Liên hệ nhượng quyền</Link>
          </li>
          <li>
            <Link to="">Về Ananas</Link>
          </li>
        </ul>
      </Expander>
      <Expander title="HỖ TRỢ">
        <ul>
          <li>
            <Link to="">FAQs</Link>
          </li>
          <li>
            <Link to="">Bảo mật thông tin</Link>
          </li>
          <li>
            <Link to="">Chính sách chung</Link>
          </li>
          <li>
            <Link to="">Tra cứu đơn hàng</Link>
          </li>
        </ul>
      </Expander>
      <Expander title="LIỆN HỆ">
        <ul>
          <li>
            <Link to="">Email góp ý</Link>
          </li>
          <li>
            <Link to="">Hotline</Link>
          </li>
          <li>
            <Link to="">0963 429 749</Link>
          </li>
        </ul>
      </Expander>
      <div className="group">
        <div className="title">ANANAS SOCIAL</div>
        <div className="cont">
          <FaFacebookSquare />
          <FaInstagramSquare />
        </div>
      </div>
      <div className="group">
        <div className="title">ĐĂNG KÝ NHẬN MAIL</div>
        <div className="form">
          <input type="text" />
          <a href="javascript(0)" className="">
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;

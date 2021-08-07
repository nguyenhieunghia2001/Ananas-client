import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { FiSearch } from "react-icons/fi";

const PurchasePage = () => {
  return (
    <div className="puschase">
      <Container>
        <header>
          <ul className="menu-list">
            <li>
              <Link to="">Tất cả</Link>
            </li>
            <li>
              <Link to="">Chờ xác nhận</Link>
            </li>
            <li>
              <Link to="">Chờ lấy hàng</Link>
            </li>
            <li>
              <Link to="">Đang giao</Link>
            </li>
            <li>
              <Link to="">Đã giao</Link>
            </li>
            <li>
              <Link to="">Đã hủy</Link>
            </li>
          </ul>
          <div className="search-group">
              <FiSearch className="icon" />
              <input type="text" placeholder="Tìm kiếm theo Tên Shop, ID đơn hàng hoặc Tên Sản phẩm"  />
          </div>
        </header>
      </Container>
    </div>
  );
};

export default PurchasePage;

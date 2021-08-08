import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { FiSearch } from "react-icons/fi";
import PurchaseList from './PurchaseList';
import "./style.scss";

const PurchasePage = () => {
  return (
    <div className="purchase">
      <Container>
        <header>
          <div className="menu-list">
            <div className="menu-item menu-item--active">
              <Link to="">Tất cả</Link>
            </div>
            <div className="menu-item">
              <Link to="">Chờ xác nhận</Link>
            </div>
            <div className="menu-item">
              <Link to="">Chờ lấy hàng</Link>
            </div>
            <div className="menu-item">
              <Link to="">Đang giao</Link>
            </div>
            <div className="menu-item">
              <Link to="">Đã giao</Link>
            </div>
            <div className="menu-item">
              <Link to="">Đã hủy</Link>
            </div>
          </div>
          <div className="search-group">
            <div className="icon">
              <FiSearch />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm theo Tên Shop, ID đơn hàng hoặc Tên Sản phẩm"
            />
          </div>
        </header>
        <div className="body">
          <PurchaseList />
        </div>
      </Container>
    </div>
  );
};

export default PurchasePage;

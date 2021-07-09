import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import "../style.scss";
const CartFixed = () => {
  const [toggleOpenState, setToggleOpenState] = useState(false);
  return (
    <div className="cartfixed">
      <div
        className="cartfixed__cont"
        onClick={() => setToggleOpenState(!toggleOpenState)}
      >
        <h4>0</h4>
        <AiOutlineShoppingCart />
      </div>
      <div
        className={
          toggleOpenState ? "cartfixed__shop shop-open" : "cartfixed__shop"
        }
      >
        <div className="cartfixed__shop-title">Giỏ hàng</div>
        <div className="divider-soild"></div>
        <div className="cartfixed__productList">
          <ProductList />
        </div>
        <div className="divider-soild"></div>
        <div className="cartfixed__shop-price">
          <p>Tổng cộng</p>
          <p>2.578.000 VND</p>
        </div>
        <div className="cartfixed__shop-btn">
          <Link to="cart" className="btn btn-cart--sm">
            THANH TOÁN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartFixed;

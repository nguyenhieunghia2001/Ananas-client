import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import "../style.scss";
import { CartContext } from "../../../context/CartContext";
import { convertStringtoMoney } from "../../../utits/index";

const CartFixed = () => {
  const { CartState } = useContext(CartContext);
  const [toggleOpenState, setToggleOpenState] = useState(false);
  return (
    <div className="cartfixed">
      <div
        className="cartfixed__cont"
        onClick={() => setToggleOpenState(!toggleOpenState)}
      >
        <h4>{CartState?.products?.length || 0}</h4>
        <AiOutlineShoppingCart />
      </div>
      <div
        className={
          toggleOpenState ? "cartfixed__shop shop-open" : "cartfixed__shop"
        }
      >
        <div className="cartfixed__shop-title">
          Giỏ hàng ({CartState?.products?.length || 0})
        </div>
        <div className="divider-soild"></div>
        <div className="cartfixed__productList">
          <ProductList products={CartState?.products} />
        </div>
        <div className="divider-soild"></div>
        <div className="cartfixed__shop-price">
          <p>Tổng cộng</p>
          <p>
            {CartState?.totalPrice() &&
              convertStringtoMoney(CartState?.totalPrice())}
          </p>
        </div>
        <div className="cartfixed__shop-btn">
          <Link
            to="/cart"
            className="btn btn-cart--sm"
            onClick={() => setToggleOpenState(false)}
          >
            THANH TOÁN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartFixed;

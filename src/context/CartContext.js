import React, { useEffect, useState } from "react";
import {
  getAllProductCart,
  addProductCart,
  removeProductCart,
} from "../api/CartApi";
//tạo context
export const CartContext = React.createContext();

const cart = {
  account: "",
  products: [],
  totalPrice: function () {
    return this.products.reduce((result, item) => result + item.total, 0);
  },
  totalQuantity: function () {
    return this.products.reduce((result, item) => result + item.quantity, 0);
  },
};

const CartProvider = ({ children }) => {
  const [CartState, setCartState] = useState(cart);
  useEffect(() => {
    async function fetch() {
      const data = await getAllProductCart();
      setCartState((pre) => {
        return {
          ...pre,
          ["account"]: data?.account,
          ["products"]: data?.products,
        };
      });
    }
    fetch();
  }, []);
  const removeCart = async (productId) => {
    // await removeCart(productId);
    // const index = CartState.map((prd) => prd._id).indexOf(product._id);
    // await setCartState([
    //   ...CartState.slice(0, index),
    //   ...CartState.slice(index + 1, CartState.length),
    // ]);
    // const result =
    // CartState.products
    const index = CartState.products
      ?.map((item) => item.product._id)
      .indexOf(productId);

    // const test = {
    //   ...CartState,
    //   ["products"]: [
    //     ...CartState.products.slice(0, index),
    //     ...CartState.products.slice(index + 1, CartState.products.length),
    //   ],
    // };

    await setCartState((pre) => {
      return {
        ...pre,
        ["products"]: [
          ...pre.products.slice(0, index),
          ...pre.products.slice(index + 1, pre.products.length),
        ],
      };
    });
    // console.log("1: ", CartState);
    // console.log("2: ", test);
  };
  return (
    <CartContext.Provider
      value={{
        CartState,
        setCartState,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

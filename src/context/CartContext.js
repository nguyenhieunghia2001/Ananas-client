import React, { useEffect, useState } from "react";
import {
  getAllProductCart,
  addProductCart,
  removeProductCart,
  updateProductCart,
} from "../api/CartApi";
//tạo context
export const CartContext = React.createContext();

const cart = {
  account: "",
  products: [],
  totalPrice: function () {
    return this.products?.reduce((result, item) => result + item.total(), 0);
  },
  totalQuantity: function () {
    return this.products?.reduce((result, item) => result + item.quantity, 0);
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
          account: data?.account,
          products: data?.products?.reduce(
            (result, item) => [
              ...result,
              {
                product: item?.product,
                quantity: item?.quantity,
                size: item?.size,
                total: function () {
                  return this.product?.price * this.quantity || 0;
                },
              },
            ],
            []
          ),
        };
      });
    }
    fetch();
  }, []);
  const removeCart = async (productId, size) => {
    const index = CartState.products?.findIndex(
      (item) => item.product._id === productId && item.size === size
    );
    await setCartState((pre) => {
      return {
        ...pre,
        products: [
          ...pre.products.slice(0, index),
          ...pre.products.slice(index + 1, pre.products.length),
        ],
      };
    });
    await removeProductCart(productId, size);
  };
  const updateQuantity = async (productId, size, quantity) => {
    const index = CartState.products
      ?.findIndex((prd) => prd.product._id === productId && prd.size === size)
    let update = {
      ...CartState.products[index],
      quantity: +quantity,
    };
    await setCartState({
      ...CartState,
      products: [
        ...CartState.products.slice(0, index),
        { ...update },
        ...CartState.products.slice(index + 1, CartState.products.length),
      ],
    });
    await updateProductCart(productId, size, quantity);
  };
  const addCart= (productId, size, quantity) =>{


    // await addProductCart(productId, size, quantity);
  }
  return (
    <CartContext.Provider
      value={{
        CartState,
        setCartState,
        removeCart,
        updateQuantity,
        addCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

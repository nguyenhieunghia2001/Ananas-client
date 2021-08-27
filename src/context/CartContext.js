import { message } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  getAllProductCart,
  addProductCart,
  removeProductCart,
  updateProductCart,
} from "../api/CartApi";
import { AccountContext } from "./AccountContext";
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
  const history = useHistory();
  const [CartState, setCartState] = useState(cart);
  const { userCurrentState } = useContext(AccountContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetch() {
      const { data, status } = await getAllProductCart();
      console.log(data, status, userCurrentState);
      if (status === 200 && userCurrentState.user.username)
        setCartState((pre) => {
          return {
            ...pre,
            account: data?.account,
            products:
              data?.products?.reduce(
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
              ) || [],
          };
        });
      else {
        setCartState(cart);
      }
    }
    fetch();
    setLoading(true);
  }, [userCurrentState, loading]);
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
    const index = CartState.products?.findIndex(
      (prd) => prd.product._id === productId && prd.size === size
    );
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
  const addCart = async (product, size, quantity) => {
    const res = await addProductCart(product._id, size, quantity);
    if (!res?.success) {
      history.push("/auth/login");
      return;
    }
    const checkPrdExist = CartState?.products?.find(
      (ct) => ct.product._id === product._id && ct.size === size
    );
    if (checkPrdExist) {
      const index = CartState.products?.findIndex(
        (prd) => prd.product._id === product._id && prd.size === size
      );
      let update = {
        ...CartState.products[index],
        quantity: +checkPrdExist.quantity + +quantity,
      };
      await setCartState({
        ...CartState,
        products: [
          ...CartState.products.slice(0, index),
          { ...update },
          ...CartState.products.slice(index + 1, CartState.products.length),
        ],
      });
    } else {
      const objectAdd = {
        product: product,
        quantity: quantity,
        size: size,
        total: function () {
          return this.product?.price * this.quantity || 0;
        },
      };
      setCartState((pre) => {
        return {
          ...pre,
          products: [...pre.products, objectAdd],
        };
      });
    }

    message.success("Thêm vào giỏ hàng thành công");
  };
  return (
    <CartContext.Provider
      value={{
        CartState,
        setCartState,
        removeCart,
        updateQuantity,
        addCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

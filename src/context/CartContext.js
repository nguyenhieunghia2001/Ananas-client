import React, { useEffect, useState } from "react";
import { getAllProductCart } from "../api/CartApi";
//tạo context
export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [CartState, setCartState] = useState();
  useEffect(() => {
    async function fetch(){
      const data = await getAllProductCart();
      setCartState(data);
    }
    fetch();
  }, []);
  
  return (
    <CartContext.Provider
      value={{
        CartState,
        setCartState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

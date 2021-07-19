import React, { useEffect, useState } from "react";
import { getProductLoveByEmail, removeProductLove } from "../api/loveApi";
//tạo context
export const ProductLoveContext = React.createContext();

const ProductLoveProvider = ({ children }) => {
  const [productLoveState, setproductLoveState] = useState();
  useEffect(() => {
    (async function () {
      const data = await getProductLoveByEmail();
      await setproductLoveState(data?.products);
    })();
  }, []);
  const removeLove = async (product) => {
    await removeProductLove(product._id);
    //xóa ra khỏi context
    const index = productLoveState.map((prd) => prd._id).indexOf(product._id);
    await setproductLoveState([
      ...productLoveState.slice(0, index),
      ...productLoveState.slice(index + 1, productLoveState.length),
    ]);
  };
  return (
    <ProductLoveContext.Provider
      value={{
        productLoveState,
        setproductLoveState,
        removeLove
      }}
    >
      {children}
    </ProductLoveContext.Provider>
  );
};

export default ProductLoveProvider;

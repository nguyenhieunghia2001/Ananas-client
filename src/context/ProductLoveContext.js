import React, { useContext, useEffect, useState } from "react";
import { getProductLoveByEmail, removeProductLove } from "../api/loveApi";
import { AccountContext } from "./AccountContext";
//tạo context
export const ProductLoveContext = React.createContext();

const ProductLoveProvider = ({ children }) => {
  const [productLoveState, setproductLoveState] = useState();
  const { userCurrentState } = useContext(AccountContext);
  useEffect(() => {
    (async function () {
      const { data, status } = await getProductLoveByEmail();
      status === 200 && (await setproductLoveState(data?.products));
    })();
  }, [userCurrentState]);
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
        removeLove,
      }}
    >
      {children}
    </ProductLoveContext.Provider>
  );
};

export default ProductLoveProvider;

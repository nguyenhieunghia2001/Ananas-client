import React, { useEffect, useState } from "react";
import { getProductLoveByEmail } from "../api/loveApi";
//tạo context
export const ProductLoveContext = React.createContext();

const ProductLoveProvider = ({ children }) => {
  const [productLoveState, setproductLoveState] = useState();
  useEffect(() => {
    (async function () {
      const data = await getProductLoveByEmail();
      setproductLoveState(data.products);
    })();
  }, []);
  return (
    <ProductLoveContext.Provider
      value={{
        productLoveState,
        setproductLoveState,
      }}
    >
      {children}
    </ProductLoveContext.Provider>
  );
};

export default ProductLoveProvider;

import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ProductLoveContext } from "../../context/ProductLoveContext";
import { addProductLove, removeProductLove } from "../../api/loveApi";

const ProductLove = ({ product }) => {
  const { productLoveState, setproductLoveState } =
    useContext(ProductLoveContext);
  const [toggleState, setToggleState] = useState();

  useEffect(() => {
    async function fetchData() {
      Array.isArray(productLoveState) &&
      productLoveState.some((prd) => prd._id === product._id)
        ? await setToggleState(true)
        : await setToggleState(false);
    }
    fetchData();
  }, [productLoveState, product._id]);
  // console.log(1);
  const handleClick = async () => {
    //nếu dang like thì xóa
    if (toggleState) {
      await removeProductLove(product._id);
      //xóa ra khỏi context
      const index = productLoveState.map((prd) => prd._id).indexOf(product._id);
      await setproductLoveState([
        ...productLoveState.slice(0, index),
        ...productLoveState.slice(index + 1, productLoveState.length),
      ]);
    } else {
      await addProductLove(product._id);
      //them vào context
      await setproductLoveState([...productLoveState, product]);
    }

    setToggleState(!toggleState);
  };
  return (
    <div onClick={() => handleClick()} className="icon-love">
      {toggleState ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};

export default ProductLove;

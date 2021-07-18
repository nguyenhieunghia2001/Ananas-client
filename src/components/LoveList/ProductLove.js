import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ProductLoveContext } from "../../context/ProductLoveContext";
import { addProductLove, removeProductLove } from "../../api/loveApi";

const ProductLove = ({ productId }) => {
  const { productLoveState } = useContext(ProductLoveContext);
  const [toggleState, setToggleState] = useState(false);
  // console.log(productLoveState.some((prd) => prd._id === productId), productId);
  useEffect(
    () =>
      Array.isArray(productLoveState) &&
      productLoveState.some((prd) => prd._id === productId)
        ? setToggleState(true)
        : setToggleState(false),
    []
  );
  const handleClick = async () => {
    //nếu dang like thì xóa
    if (toggleState) await removeProductLove(productId);
    else await addProductLove(productId);

    setToggleState(!toggleState);
  };
  return (
    <div onClick={() => handleClick()} className="icon-love">
      {toggleState ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};

export default ProductLove;

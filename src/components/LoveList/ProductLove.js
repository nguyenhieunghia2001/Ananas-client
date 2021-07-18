import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ProductLoveContext } from "../../context/ProductLoveContext";
import { addProductLove, removeProductLove } from "../../api/loveApi";

const ProductLove = ({ productId }) => {
  console.log(productId);
  const { productLoveState } = useContext(ProductLoveContext);
  const [toggleState, setToggleState] = useState();

  useEffect(() => {
    async function fetchData() {
      console.log(1);
      Array.isArray(productLoveState) &&
      productLoveState.some((prd) => prd._id === productId)
        ? await setToggleState(true)
        : await setToggleState(false);
    }
    fetchData();
  }, []);

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

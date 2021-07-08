import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const ProductLove = () => {
  const [toggleState, setToggleState] = useState(false);
  return (
    <>
      <div onClick={() => setToggleState(!toggleState)} className="icon-love">
        {toggleState ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
    </>
  );
};

export default ProductLove;

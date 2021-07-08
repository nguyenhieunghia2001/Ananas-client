import React, { useState } from "react";
import "./style.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Expander = ({ title, des, img }) => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className="expander">
      <div
        className={toggleState ? "expander-title open" : "expander-title"}
        onClick={() => setToggleState(!toggleState)}
      >
        <h4>{title}</h4>
        {toggleState ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div className="divider-img"></div>
      <div className={toggleState ? "expander-des openDes" : "expander-des"}>
        <p>{des}</p>
        {img && <img src={img} alt="info peoduct" />}
        <div className="divider-img"></div>
      </div>
    </div>
  );
};

export default Expander;

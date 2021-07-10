import React, { useState } from "react";
import "../style.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpanderSidebar = ({ title, children }) => {
  const [toggleState, setToggleState] = useState(false);
  return (
    <>
      <div
        className={
          toggleState ? "sidebar__title sidebar__title-open" : "sidebar__title"
        }
        onClick={() => setToggleState(!toggleState)}
      >
        {title}
        <span className="caret">
          {toggleState ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <div style={{ display: toggleState ? "block" : "none" }}>
        {children}
      </div>
    </>
  );
};

export default ExpanderSidebar;

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const size = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Combobox = ({type}) => {
  const [toggleState, setToggleState] = useState(false);
  const [selectedState, setSelectedState] = useState();
  const component = type && type === 'SIZE' ? size : quantity;

  const handleSelect = (item) => {
    setSelectedState(item);
    setToggleState(false);
  }
  return (
    <>
      <div
        className="select__isSelected"
        onClick={() => setToggleState(!toggleState)}
      >
        <span>{selectedState || `XX`}</span>
        <FaChevronDown />
      </div>
      <div
        className={
          toggleState ? "select__option select__option-open" : "select__option"
        }
      >
        <ul>
          {component.map((item) => (
            <li onClick={() => handleSelect(item)}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Combobox;

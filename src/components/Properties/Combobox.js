import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./style.scss";

const size = [
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
];
const quantity = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const Combobox = ({ type, values, setValue, disabled, selected }) => {
  const wrapperRef = useRef(null);
  const [toggleState, setToggleState] = useState(false);
  const [selectedState, setSelectedState] = useState(selected);
  const component = type && type === "SIZE" ? size : quantity;
  const handleSelect = async (item) => {
    setSelectedState(item);
    setToggleState(false);

    setValue(item, type);
  };
  const checkDisabled = (item) => {
    if (type === "SIZE") {
      return values?.some((v) => v?.size?.name === item && v?.quantity > 0)
        ? false
        : true;
    } else {
      return +values >= +item ? false : true;
    }
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef?.current && !wrapperRef?.current.contains(event.target)) {
        setToggleState(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div className="wrapper-select" ref={wrapperRef}>
      <div
        className={`select__isSelected ${disabled ? "select-disabled" : ""}`}
        onClick={() => !disabled && setToggleState(!toggleState)}
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
          {component.map((item, index) => (
            <li key={index}>
              <button
                className="btn btn-enable"
                type="button"
                onClick={() => handleSelect(item)}
                disabled={checkDisabled(item)}
              >
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Combobox;

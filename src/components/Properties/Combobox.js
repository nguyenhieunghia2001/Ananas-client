import React, { useState } from "react";
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

const Combobox = ({ type, values, setValue, disabled }) => {
  const [toggleState, setToggleState] = useState(false);
  const [selectedState, setSelectedState] = useState();
  const component = type && type === "SIZE" ? size : quantity;
  const handleSelect = async (item) => {
    setSelectedState(item);
    setToggleState(false);

    setValue(item, type);
    // if (type === "SIZE") {
    //   const sizeItem = values.find((v) => v.size?.name === item);
    //   setValue((pre) => {
    //     return {
    //       ...pre,
    //       ["STOCK"]: sizeItem.quantity?.toString(),
    //       [type]: item,
    //     };
    //   });
    // } else {
    //   setValue((pre) => {
    //     return {
    //       ...pre,
    //       [type]: item,
    //     };
    //   });
    // }
  };
  const checkDisabled = (item) => {
    // console.log('item', item);
    if (type === "SIZE") {
      return values?.some((v) => v?.size?.name === item) ? false : true;
    } else {
      return +values >= +item ? false : true;
    }
  };
  // console.log(disabled);
  return (
    <>
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
    </>
  );
};

export default Combobox;

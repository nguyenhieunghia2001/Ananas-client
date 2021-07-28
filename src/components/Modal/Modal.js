import React, { Component, useState } from "react";
import "./style.scss";

const Modal = ({ component: Component}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="modal-primary">
      <Component />
    </div>
  );
};

export default Modal;

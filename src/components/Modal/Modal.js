import React from "react";
import "./style.scss";

//isOpenModal, setIsOpenModal
const Modal = ({ component: Component, isShowing, ...rest}) => {
  return (
    <>
      {isShowing && (
        <div className="modal-primary">
          <Component {...rest} />
        </div>
      )}
    </>
  );
};

export default Modal;

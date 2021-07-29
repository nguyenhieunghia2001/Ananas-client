import React from "react";
import "./style.scss";

//isOpenModal, setIsOpenModal
const Modal = ({ component: Component, isOpenModal, ...rest}) => {
  return (
    <>
      {isOpenModal && (
        <div className="modal-primary">
          <Component {...rest} />
        </div>
      )}
    </>
  );
};

export default Modal;

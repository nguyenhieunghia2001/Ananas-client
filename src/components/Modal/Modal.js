import React from "react";
import "./style.scss";

const Modal = ({ component: Component, isOpenModal, setIsOpenModal }) => {
  return (
    <>
      {isOpenModal && (
        <div className="modal-primary">
          <Component setIsOpen={setIsOpenModal} />
        </div>
      )}
    </>
  );
};

export default Modal;

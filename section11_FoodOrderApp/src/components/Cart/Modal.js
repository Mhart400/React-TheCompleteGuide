import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(<Backdrop closeCart={props.closeCart} />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay children={props.children} />,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;

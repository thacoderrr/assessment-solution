import React, { useState, useEffect, useRef } from "react";
import { X } from "phosphor-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Modal = ({
  setTimeout,
  loading,
  open,
  text,
  close,
  children,
  scrollable,
  ...rest
}) => {
  // const [load, setLoad] = useState(false);
  const isBigScreen = useMediaQuery({ minWidth: 1200 });
  const modalRef = useRef(null);

  const handleClose = (e, info) => {
    const { offset } = info;
    if (offset.y >= 500) {
      close();
    }
  };

  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (modalRef.current && !modalRef.current.contains(e.target)) {
  //       close();
  //     }
  //   };
  //   if (open) {
  //     document.addEventListener("click", handleOutsideClick);
  //   }
  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [open, close]);

  return (
    <div className={` modal overlay ${open ? "" : "modal__close"} `}>
      <motion.div
        drag={isBigScreen ? false : "y"}
        onDragEnd={handleClose}
        dragConstraints={{ bottom: 100 }}
        dragSnapToOrigin={true}
        className="modal__container"
        ref={modalRef}
      >
        {loading && (
          <div
            className="modal__closeBtn xs-hide sm-hide"
            onClick={() => close()}
          >
            <X size={20} weight="bold" color={"#ffffff"} />
          </div>
        )}
        <div className="xs-show sm-show md-hide xl-hide lg-hide modal__liner"></div>
        <div className="modal__inner ">{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;

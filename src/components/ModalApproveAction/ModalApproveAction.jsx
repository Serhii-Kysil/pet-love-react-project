import { useEffect } from "react";

import css from "./ModalApproveAction.module.css";

import { IoMdClose } from "react-icons/io";
import { FaCat } from "react-icons/fa";

export const ModalApproveAction = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("no-scroll");
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className={css.modal}>
          <div
            className={`${css.modalWrapper} modal-wrapper`}
            onClick={onWrapperClick}
          >
            <div className={css.modalContent}>
              <button className={css.closeBtn} onClick={() => onClose()}>
                <IoMdClose className={css.icon} />
              </button>
              {children}
              <div className={css.contant}>
                <div className={css.iconBlock}>
                  <FaCat className={css.catIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

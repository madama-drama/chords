import React, { FC, ReactNode } from "react";
import Styles from "./modal.module.css";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import cross from "../../image/x-black.svg";

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
  title: string;
}
export const Modal: FC<IModalProps> = ({ children, onClose, title }) => {
  React.useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <ModalOverlay onClose={onClose}>
      <div className={Styles.modalCard}>
        <button className={Styles.buttonClose} onClick={onClose}>
          <img src={cross} alt="Крест для закрытия модального окна" />
        </button>
        <h1 className={Styles.title}>{title}</h1>
        {children}
      </div>
    </ModalOverlay>
  );
};

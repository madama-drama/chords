import React, { FC, ReactNode } from "react";
import Styles from './modal-overlay.module.css'

interface IOverlayProps{
    onClose: ()=>void,
    children: ReactNode
  }

export const ModalOverlay: FC<IOverlayProps> = ({ onClose, children }) => {
    return (
      <div className={Styles.back} >
        <div className={Styles.shadow} onClick={onClose}/>
        {children}
      </div>
    );
  };
import React, { ReactNode } from "react";
import styles from './Popup.module.css'
interface PopupProps {
    children: ReactNode
    setOpenPopup: (value: boolean) => void
    isOpen: boolean
}

export const Popup = ({ children, setOpenPopup, isOpen }: PopupProps) => {
  if (!isOpen) {
    return null;
  }
    
  return (
    <div className={styles.PopupBackdrop} onClick={() => setOpenPopup(false)}>
      <div className={styles.PopupCloseBtn} onClick={() => setOpenPopup(false)}>
        <div className={styles.PopupCloseBtnIcon} />
      </div>
      <div className={styles.Popup} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

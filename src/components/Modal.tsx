import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;

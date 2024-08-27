import { FC, PropsWithChildren } from "react";
import ModalLayout from "./ModalLayout";
import { ModalToggleProps } from "hooks/useModalToggle";

interface ModalComponentProps extends PropsWithChildren<ModalToggleProps> {}

const Modal: FC<ModalComponentProps> = ({ children, ...layoutProps }) => {
  return <ModalLayout {...layoutProps}>{children}</ModalLayout>;
};

export default Modal;

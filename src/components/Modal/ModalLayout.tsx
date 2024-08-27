import { cn } from "components/helpers/cs";
import Portal from "components/Portal";
import { ModalToggleProps } from "hooks/useModalToggle";
import { FC, PropsWithChildren } from "react";

interface ModalLayoutProps extends PropsWithChildren<ModalToggleProps> {}

const ModalLayout: FC<ModalLayoutProps> = ({
  isOpen,
  onClose,
  children,
  animation,
}) => {
  if (!isOpen) return null;

  return (
    <Portal target="modals-root">
      <div
        onClick={onClose}
        className={cn(
          "h-screen overscroll-none z-50 top-0 left-0 w-full bg-black/30 flex justify-center items-center fixed",
          animation === "out" ? `animate-fade-out` : "animate-fade-in"
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-black max-w-xl w-full rounded-xl shadow-xl p-5"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default ModalLayout;

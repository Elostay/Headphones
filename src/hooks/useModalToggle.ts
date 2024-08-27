import { useEffect, useState } from "react";

type ModalAnimation = "in" | "out";

export interface ModalToggleProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  animation: ModalAnimation;
}
const useModalToggle = (): ModalToggleProps => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState<ModalAnimation>("in");

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => {
    setAnimation("out");
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    if (isOpen) {
      setAnimation("in");
    }
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    isOpen,
    onOpen: handleOpenModal,
    onClose: handleCloseModal,
    animation,
  };
};

export default useModalToggle;

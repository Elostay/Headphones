interface BurgerMenuProps {
  isOpen: boolean;
}
const BurgerMenu = ({ isOpen }: BurgerMenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-10 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <a href="">Characteristics</a>
      <a href="">History</a>
      <a href="">Reviews</a>
      <a href="">Payment and delivery</a>
    </div>
  );
};

export default BurgerMenu;

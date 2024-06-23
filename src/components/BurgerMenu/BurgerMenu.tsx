import Logo from "../../assets/images/logo.png";

interface BurgerMenuProps {
  isOpen: boolean;
}
const BurgerMenu = ({ isOpen }: BurgerMenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full  shadow-lg transform transition-transform duration-300 z-10 bg-[#191919] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="py-9 px-5 text-white">
        <img src={Logo} alt="Bose logo" className=" mb-14 w-[100px] h-3" />
        <div className="flex flex-col gap-6">
          {/* <a href="#">Characteristics</a> */}
          {/* <a href="#">History</a> */}
          {/* <a href="#">Reviews</a> */}
          {/* <a href="#">Payment and delivery</a> */}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;

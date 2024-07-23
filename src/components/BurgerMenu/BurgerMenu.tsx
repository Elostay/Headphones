import Logo from "../../assets/images/logo.png";

interface BurgerMenuProps {
  isOpen: boolean;
}

const BurgerMenu = ({ isOpen }: BurgerMenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0  w-full h-full  shadow-lg transform transition-transform duration-300  z-10 bg-[#191919] md:h-[385px] md:inset-x-0 ${
        isOpen
          ? "translate-x-0 md:translate-y-0"
          : "translate-x-full  md:-translate-y-full md:translate-x-0"
      }`}
    >
      <div className="my-9 px-5 text-white md:px-[60px] md:mt-[50px] md:mb-[100px]">
        <img src={Logo} alt="Bose logo" className="mb-14 w-[100px] h-3" />
        <ul className="flex flex-col gap-6 md:text-base">
          <li>
            <a
              href="#characteristics"
              className="hover:border-b hover:border-white"
            >
              Characteristics
            </a>
          </li>
          <li>
            <a href="#history" className="hover:border-b hover:border-white">
              History
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:border-b hover:border-white">
              Reviews
            </a>
          </li>
          <li>
            <a href="#payment" className="hover:border-b hover:border-white">
              Payment and delivery
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;

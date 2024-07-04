import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import BurgerMenu from "components/BurgerMenu";

interface HeaderProps {
  windowWidth: number;
}

const Header = ({ windowWidth }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative my-9 md:my-[50px] flex justify-between w-full items-center lg:my-[66px] ">
      <img src={Logo} alt="Bose logo" className=" float-left w-[100px] h-3" />
      {windowWidth >= 1440 ? (
        <ul className="flex  gap-[77px] md:text-base">
          {/* <li>
            <a href="#" className="hover:border-b hover:border-white">
              Characteristics
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b hover:border-white">
              History
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b hover:border-white">
              Reviews
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b hover:border-white">
              Payment and delivery
            </a>
          </li> */}
        </ul>
      ) : (
        <div className="">
          <button
            type="button"
            className="fixed top-8 right-5 z-20 overflow-hidden md:top-12 md:right-[50px] "
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div
              className={`w-8 h-[2px] bg-white my-1 transition-transform duration-300 ${
                isMenuOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-[3px] bg-white my-1 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-8 h-[2px] bg-white my-1 transition-transform duration-300 ${
                isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
          <BurgerMenu isOpen={isMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;

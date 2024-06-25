import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import BurgerMenu from "components/BurgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="place-self-start my-9 md:my-14">
      <img src={Logo} alt="Bose logo" className=" float-left w-[100px] h-3" />
      <div className="">
        <button
          type="button"
          className=" top-8 right-5 z-20 overflow-hidden"
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
    </header>
  );
};

export default Header;

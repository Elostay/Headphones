import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import BurgerMenu from "components/BurgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <img src={Logo} alt="" />
      <div className="relative">
        <button
          type="button"
          className="fixed top-4 right-4 z-20"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div
            className={`w-8 h-1 bg-black my-1 transition-transform duration-300 ${
              isMenuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black my-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black my-1 transition-transform duration-300 ${
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

import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import BurgerMenu from "components/BurgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeBurger = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="relative my-9 md:my-[50px] flex justify-between w-full items-center lg:my-[66px] xl:my-[74px]">
      <img
        src={Logo}
        alt="Bose logo"
        className=" float-left w-[100px] h-3 xl:absolute xl:-left-[200px]"
      />
      {windowWidth >= 1440 ? (
        <ul className="flex  gap-[77px] md:text-base absolute -right-[250px] xl:-right-[200px]">
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
      ) : (
        <div>
          <button
            type="button"
            className="fixed top-8 right-5 z-20 overflow-hidden md:top-12 md:right-[50px]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div
              className={`w-8 h-[2px] my-[4px] bg-white transition-transform duration-300 ${
                isMenuOpen ? "transform rotate-45 translate-y-[6px]" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-[2px] my-[4px] bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-8 h-[2px] my-[4px] bg-white transition-transform duration-300 ${
                isMenuOpen ? "transform -rotate-45 -translate-y-[6px]" : ""
              }`}
            ></div>
          </button>

          <BurgerMenu isOpen={isMenuOpen} closeBurger={closeBurger} />
        </div>
      )}
    </header>
  );
};

export default Header;

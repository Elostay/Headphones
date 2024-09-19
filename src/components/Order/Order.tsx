import BlackHeadphonesPhone from "assets/images/choose_black_headphones/choose_black_headphones-phone.jpg";
import BlackHeadphonesTablet from "assets/images/choose_black_headphones/choose_black_headphones-tablet.png";
import BlackHeadphonesLaptop from "assets/images/choose_black_headphones/choose_black_headphones-laptop.png";
import GrayHeadphonesPhone from "assets/images/choose_gray_headphones/choose_gray_headphones-phone.jpg";
import GrayHeadphonesTablet from "assets/images/choose_gray_headphones/choose_gray_headphones-tablet.png";
import GrayHeadphonesLaptop from "assets/images/choose_gray_headphones/choose_gray_headphones-laptop.png";
import CustomRadioButtons from "components/CustomRadioButtons";
import Modal from "components/Modal";
import RedArrow from "components/RedArrow";
import useModalToggle from "hooks/useModalToggle";
import { useState } from "react";

const Order = () => {
  const [color, setColor] = useState("black");
  const modalProps = useModalToggle();

  const handleClick = (color: string) => {
    color === "black" ? setColor("black") : setColor("gray");
  };
  return (
    <section className="xl:w-full xl:relative">
      <h2 id="payment">bose nc 700</h2>

      <div className="md:w-[648px] md:bg-[#1D1D1D] xl:w-[700px] xl:absolute custom-calc-right-1440 top-[50px] ">
        {color === "black" ? (
          <picture>
            <source
              srcSet={BlackHeadphonesLaptop}
              media="(min-width: 1280px)"
            />
            <source srcSet={BlackHeadphonesTablet} media="(min-width: 768px)" />
            <img src={BlackHeadphonesPhone} alt="black phones" />
          </picture>
        ) : (
          <picture>
            <source srcSet={GrayHeadphonesLaptop} media="(min-width: 1280px)" />
            <source srcSet={GrayHeadphonesTablet} media="(min-width: 768px)" />
            <img src={GrayHeadphonesPhone} alt="gray headphones" />
          </picture>
        )}
      </div>

      <CustomRadioButtons handleClick={handleClick} />

      <ul className="xl:w-[400px]">
        <li className="flex justify-between py-6 border-b-2 border-[#303030]">
          <p className="text-base">Availability in stores</p>
          <RedArrow />
        </li>
        <li className="flex justify-between py-6 border-b-2 border-[#303030]">
          <p className="text-base">Characteristics</p>
          <RedArrow />
        </li>
        <li className="flex justify-between py-6 border-b-2 border-[#303030]">
          <p className="text-base">Payment and delivery methods</p>
          <RedArrow />
        </li>
      </ul>
      <p className="mt-8 mb-6 text-2xl text-[#DF3D3A] font-semibold md:mt-[52px] md:mb-8 xl:text-[54px] ">
        14 999 UAH
      </p>
      <button
        onClick={modalProps.onOpen}
        type="button"
        className="bg-[#DF3D3A] w-[280px] h-[58px] font-semibold text-base uppercase tracking-widest xl:text-xl"
      >
        Order
      </button>

      <Modal {...modalProps}>Will be avaliable soon!</Modal>
    </section>
  );
};

export default Order;

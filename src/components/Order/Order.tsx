import BlackHeadphones from "assets/images/choose_black_headphones/choose_black_headphones-phone.jpg";
import GrayHeadphones from "assets/images/choose_gray_headphones/choose_gray_headphones-phone.jpg";
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
    <section>
      <h2 id="payment">bose nc 700</h2>
      <div>
        {color === "black" ? (
          <img src={BlackHeadphones} alt="black phones" />
        ) : (
          <img src={GrayHeadphones} alt="gray headphones" />
        )}

        {/* <form>
          <label>
            <input type="radio" name="color" value="black" checked />
            black
          </label>
          <label>
            <input type="radio" name="color" value="gray" />
            gray
          </label>
        </form> */}

        <CustomRadioButtons handleClick={handleClick} />

        <ul>
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
        <p className="mt-8 mb-6 text-2xl text-[#DF3D3A] font-semibold">
          14 999 UAH
        </p>
        <button
          onClick={modalProps.onOpen}
          type="button"
          className="bg-[#DF3D3A] w-[280px] h-[58px] font-semibold text-base uppercase tracking-widest"
        >
          Order
        </button>
      </div>
      <Modal {...modalProps}>Will be avaliable soon!</Modal>
    </section>
  );
};

export default Order;

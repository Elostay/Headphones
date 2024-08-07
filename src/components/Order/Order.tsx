import BlackHeadphones from "assets/images/choose_black_headphones/choose_black_headphones-phone.jpg";
import GrayHeadphones from "assets/images/choose_gray_headphones/choose_gray_headphones-phone.jpg";
import RedArrow from "components/RedArrow";
import { useState } from "react";

const Order = () => {
  const [color, setColor] = useState("black");

  const handleClick = (color: string) => {
    if (color === "black") setColor("black");
    setColor("gray");
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
        <div className="py-8 border-b-2 border-[#303030]">
          <button
            onClick={() => handleClick("black")}
            type="button"
            className="mr-6"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="#1D1D1D" />
              <circle
                cx="22"
                cy="22"
                r="21.5"
                stroke="white"
                stroke-opacity="0.8"
              />
              <circle
                cx="22"
                cy="22"
                r="15"
                fill="black"
                stroke="#DF3D3A"
                stroke-width="2"
              />
            </svg>
          </button>
          <button onClick={() => handleClick("gray")} type="button">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="white" fill-opacity="0.8" />
              <circle
                cx="22"
                cy="22"
                r="21.5"
                stroke="white"
                stroke-opacity="0.8"
              />
              <circle cx="22" cy="22" r="16" fill="white" fill-opacity="0.8" />
            </svg>
          </button>
        </div>
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
          type="button"
          className="bg-[#DF3D3A] w-[280px] h-[58px] font-semibold text-base uppercase tracking-widest"
        >
          Order
        </button>
      </div>
    </section>
  );
};

export default Order;

import React, { useState } from "react";

interface CustomRadioButtonsProps {
  handleClick: (color: string) => void;
}

function CustomRadioButtons({ handleClick }: CustomRadioButtonsProps) {
  const [selectedOption, setSelectedOption] = useState("black");

  const handleColorChange = (color: string) => {
    if (color === "black") {
      setSelectedOption("black");
    } else {
      setSelectedOption("gray");
    }
    handleClick(color);
  };

  return (
    <div className="flex space-x-6 py-8 border-b-2 border-[#303030] xl:py-[58px] xl:w-[400px]">
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="custom-radio"
          value="black"
          checked={selectedOption === "black"}
          onChange={() => handleColorChange("black")}
          className="hidden"
        />
        <div
          className={`bg-black w-11 h-11 flex justify-center items-center rounded-full border-2 border-[#D2D2D2] xl:w-[70px] xl:h-[70px] ${
            selectedOption === "black" ? "bg-black" : "border-black"
          }`}
        >
          <div className="w-10 h-10 border-4 border-[#1D1D1D] rounded-full xl:w-[60px] xl:h-[60px] ">
            {selectedOption === "black" && (
              <div className="w-8 h-8 border-2 border-[#DF3D3A] rounded-full xl:w-[54px] xl:h-[54px]"></div>
            )}
          </div>
        </div>
      </label>

      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="custom-radio"
          value="gray"
          checked={selectedOption === "gray"}
          onChange={() => handleColorChange("gray")}
          className="hidden"
        />
        <div
          className={`bg-white w-11 h-11 flex justify-center items-center rounded-full border-2 xl:w-[70px] xl:h-[70px] ${
            selectedOption === "gray"
              ? "bg-white border-gray-400"
              : "border-gray-400"
          }`}
        >
          <div className="w-10 h-10 border-4 border-[#CFCFCF] rounded-full  xl:w-[60px] xl:h-[60px]">
            {selectedOption === "gray" && (
              <div className="w-8 h-8 border-2 border-[#DF3D3A] rounded-full  xl:w-[54px] xl:h-[54px]"></div>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

export default CustomRadioButtons;

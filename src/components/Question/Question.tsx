import { useState } from "react";

interface QuestionProps {
  number: string;
  text: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const Question = ({ isOpen, onClick, number, text, answer }: QuestionProps) => {
  return (
    <li className="py-6 border-b-2 border-[#303030]">
      <button className="flex text-left" onClick={onClick}>
        <p className="text-xl font-[RobotoCondensed]">{number}</p>
        <p className="mr-3 ml-4 w-[200px]">{text}</p>
        <p className="text-xl w-8 h-8 bg-[#303030] flex items-center justify-center rounded-full shrink-0 font-[RobotoCondensed]">
          ?
        </p>
      </button>
      {isOpen && <p className="mt-6 ml-9">{answer}</p>}
    </li>
  );
};

export default Question;

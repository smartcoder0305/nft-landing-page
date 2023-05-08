// imports
import React, { useState } from "react";
import plusIcon from "../../../assets/img/plus.png";
import minusIcon from "../../../assets/img/minus.png";

// types
type QACardProps = {
  question: string;
  answer: string;
};

// QACard
const QACard = ({ question, answer }: QACardProps) => {
  // hooks
  const [show, setShow] = useState(false);

  // methods
  const toggle = () => {
    setShow(!show);
  };

  // render
  return (
    <div className="my-2">
      <div className="flex my-1">
        <p className="grow text-sm md:text-lg font-medium font-plusJakartaSans text-slate-200">
          {question}
        </p>
        <button onClick={toggle}>
          <img
            className="h-6 left mx-2"
            src={show ? minusIcon : plusIcon}
            alt="Question Answer open and close"
          />
        </button>
      </div>
      <p
        className={`text-sm md:text-base leading-6 font-normal font-plusJakartaSans font-light text-gray-300 overflow-hidden transition-all duration-1000 ${
          show ? "max-h-[120px] md:max-h-[70px]" : "max-h-0"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

//exports
export default QACard;

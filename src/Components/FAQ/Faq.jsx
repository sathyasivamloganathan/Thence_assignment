import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Faq = ({question, answer}) => {
    const [expanded, setExpanded] = useState(true);
const toggleAnswer = () => {
    setExpanded(!expanded)
}
  return (
    <div>
      <div className="border-[#D7D7D7] border-b-2">
        <div className="flex justify-between pb-4 mt-[30px]">
          <div className="max-w-[550px]">{question}</div>
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleAnswer}
          >
            {expanded ? <FaPlus /> : <FaMinus />}
          </div>
        </div>

        <div
          className={
            expanded
              ? "font-manrope text-[15px] font-normal text-[#617275] opacity-0 max-h-0  transition-max-height ease-in duration-300"
              : "font-manrope text-[15px] font-normal text-[#617275] py-6 opacity-100 max-h-full transition-max-height ease-in-out duration-300"
          }
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export default Faq
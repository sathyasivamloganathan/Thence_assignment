import React from "react";
import './style.css'
import Faq from "../../Components/FAQ/Faq";
import ArrowImage from '../../assets/arrowImage.png'
const Questions = () => {
  return (
    <div className="questions-container">
      <div className="left-container w-[50%]">
        <text>What’s on your mind</text>
        <text>Ask Questions</text>
        <img src={ArrowImage} alt="arrowImage" className="w-[400px] h-[500px] mt-[60px]"/>
      </div>
      <div className="mt-[70px] m-[50px] w-[50%]">
        <Faq
          question={"Do you offer freelancers?"}
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        />
        <Faq
          question={
            "What’s the guarantee that I will be satisfied with the hired talent?"
          }
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        />
        <Faq
          question={"Can I hire multiple talents at once?"}
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        />
        <Faq
          question={"Why should I not go to an agency directly?"}
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        />
      </div>
    </div>
  );
};

export default Questions;

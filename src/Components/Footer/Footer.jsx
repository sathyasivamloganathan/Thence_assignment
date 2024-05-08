import React from 'react'

const Footer = () => {
  return (
    <div className="lg:max-w-[1400px] max-w-[83%] h-[150px] bg-[#F5F5F5] m-auto rounded-[30px] mt-[50px] mb-[50px] flex flex-row justify-between items-center">
      <p className="lg:ml-[70px] ml-[50px] text-[#1C1C1C]">
        &copy;Talup 2023. All rights reserved
      </p>
      <div className="flex lg:flex-row flex-col gap-[30px]  lg:mr-[70px] mr-[30px] text-[#1C1C1C]">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer
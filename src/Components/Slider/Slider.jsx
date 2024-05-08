import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
     const sliderRef = useRef(null);
     const [currentSlide, setCurrentSlide] = useState(0);

     const goToSlide = (index) => {
       sliderRef.current.slickGoTo(index);
     };

     const settings = {
       dots: false,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 3000,
       afterChange: (index) => setCurrentSlide(index),
     };
  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        <div>
          Enhance fortune 50 company&apos;s insights teams research capabilities
        </div>
        <div>
          Enhance fortune 50 company&apos;s insights teams research capabilities
        </div>
        <div>
          Enhance fortune 50 company&apos;s insights teams research capabilities
        </div>
      </Slider>
      <div className="flex space-x-3 mt-[50px]">
        <div
          className={`h-[10px] w-[10px] rounded-full  cursor-pointer ${
            currentSlide === 0
              ? "bg-[#2DA950]"
              : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"
          }`}
          onClick={() => goToSlide(0)}
        ></div>

        <div
          className={`h-[10px] w-[10px] rounded-full  cursor-pointer ${
            currentSlide === 1
              ? "bg-[#2DA950]"
              : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"
          }`}
          onClick={() => goToSlide(1)}
        ></div>

        <div
          className={`h-[10px] w-[10px] rounded-full  cursor-pointer ${
            currentSlide === 2
              ? "bg-[#2DA950]"
              : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"
          }`}
          onClick={() => goToSlide(2)}
        ></div>
      </div>
    </div>
  );
}

export default SliderComponent;
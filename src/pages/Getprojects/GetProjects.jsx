import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { PiWarningCircle } from "react-icons/pi";
import { IoMdCheckmarkCircle } from "react-icons/io";

const GetProjects = () => {

    const navigate = useNavigate();
    const [Submitted, setSubmitted] = useState(false); 
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [errors, setErrors] = useState(null);
    const [remainingTime, setRemainingTime] = useState(5); 

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!isEmailValid) {
        setErrors("Enter a valid email address");
        return;
      } else {
        setErrors(null);
        setSubmitted(true);
      }
    };

    useEffect(() => {
      let timerId;
      if (Submitted) {
        timerId = setInterval(() => {
          setRemainingTime((prevTime) => prevTime - 1);
          if (remainingTime === 0) {
            navigate("/");
          }
        }, 1000);
      }
      return () => clearInterval(timerId); 
    }, [Submitted, navigate, remainingTime]);

    const handleEmail = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      setIsEmailValid(validateEmail(newEmail));
    };

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };


  return (
    <div>
      <div className="flex flex-row justify-between">
        <img
          src={Logo}
          alt="logo"
          className="lg:w-[130px] lg:h-[40px] w-[70px] h-[30px] m-[50px]"
        />
        {Submitted ? (
          ""
        ) : (
          <Link to={"/"}>
            <IoIosCloseCircleOutline className="lg:text-[50px] text-[30px] m-[50px] mr-[30px]" />
          </Link>
        )}
      </div>

      {Submitted ? (
        <>
          <div className="flex justify-center mt-[40px]">
            <div className="">
              <IoMdCheckmarkCircle className="text-[60px] text-[#28B246] m-auto" />
              <div className="mt-[30px]">
                <div className="register text-[36px] text-[#2DA950] text-center">
                  Success Submitted
                </div>
                <div className="lg:text-[45px] text-[30px] font-bold font-manrope tracking-tight success text-center">
                  Congratulations
                </div>
                <div className="success lg:text-[23px] text-[18px] sm:m-[10px] text-[#727272] max-w-[700px] text-center mt-[10px]">
                  Your request has been successfully submitted to us. We will
                  validate your information and reach out to your shortly with
                  updates
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[110px] flex justify-center font-manrope font-medium text-[20px] text-[#727272]">
            Redirecting you to Homepage in&nbsp;{" "}
            <span className="text-black font-semibold">
              {" "}
              {remainingTime} Seconds
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center mb-[50px]">
            <div className="max-w-[590px]">
              <div className="register text-[27px] text-[#2DA950] text-center">
                Registration Form
              </div>
              <div className="success font-semibold lg:text-[45px] text-[25px] mt-[10px] text-center leading-tight	">
                Start your success <br />
                Journey here!
              </div>
              <form onSubmit={handleSubmit} className="mt-[40px]">
                <div className="flex justify-center">
                  <input
                    className={`bg-[#EFEFEF] placeholder:text-[#827A7A] py-6 px-10 placeholder:text-[20px] w-[300px] h-[70px] lg:w-[400px] lg:h-[70px] rounded-full`}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-center mt-[20px]">
                  <input
                    className={`bg-[#EFEFEF] placeholder:text-[#827A7A] py-6 px-10 placeholder:text-[20px] w-[300px] h-[70px] lg:w-[400px] lg:h-[70px] rounded-full`}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmail}
                    required
                  />
                </div>
                {errors ? (
                  <div className="error flex text-[#FF0808] items-center lg:ml-[90px] mt-[15px]  tracking-tight text-[16px]">
                    <PiWarningCircle />
                    {errors}
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex justify-center mt-[50px]">
                  <button
                    type="submit"
                    className={`w-[300px] h-[70px] lg:w-[400px] lg:h-[70px] text-[18px] text-white ${
                      name && email && isEmailValid
                        ? "bg-black  hover:bg-[#4E4E4E]"
                        : "bg-[#C9C9C9] cursor-not-allowed"
                    } p-6 rounded-full`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default GetProjects
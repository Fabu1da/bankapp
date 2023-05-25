import React from "react";
import { robot, discount } from "../../assets";
import GetStarted from "../GetStarted";
import styles from "../../style";
const Hero = () => {
  return (
    <section
      className={`flex md:flex-row flex-col justify-between items-center ${styles.paddingY}`}
      id="home"
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 p-16 `}
      >
        <div className="flex flex-row justify-start items-center p-[6px] bg-discount-gradient w-max rounded-[10px]">
          <img src={discount} height="h-[32px] w-[32px]" alt="" />
          <p className={`${styles.paragraph}`}>
            20% <span className="text-gray-500">DISCOUNT FOR</span> 1 MONTH
            <span className="text-gray-500">ACCOUNT</span>{" "}
          </p>
        </div>
        <div className="relative">
          <h1 className="flex-1 font-poppins ss:text-[72px] text-[52px] ss:leading-[100px] font-semibold text-white my-3">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
            <br className="sm:block hidden" />
            Payment Method.
          </h1>
          <div className="ss:flex hidden absolute top-2 right-0 md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph}`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt="" className="w-[100%] h-[100%] relative z-[5]" />
        <div className=" absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className=" absolute z-1 bottom-40 w-[80%] h-[80%]  white__gradient" />
        <div className=" absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;

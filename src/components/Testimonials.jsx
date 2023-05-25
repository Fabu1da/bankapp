import React from "react";
import styles from "../style";
import { quotes } from "../assets";
import { feedback } from "../constants";
const Testimonials = () => {
  const FeedBack = ({ feed: { content, name, title, img } }) => {
    return (
      <div className="flex items-start justify-start flex-col p-[40px] feature-card cursor-pointer rounded-md">
        <img src={quotes} alt=" " />
        <p className={`${styles.paragraph} my-10`}>{content}</p>
        <div className="flex flex-row gap-8">
          <img src={img} alt="" className="w-[48px] h-[48px]" />
          <div>
            <h4 className="text-[20px] font-[400] text-white">{name}</h4>
            <p className="text-[#acac]">{title}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className={`${styles.paddingY} `}>
      <div className="flex md:flex-row flex-col items-center gap-20">
        <div>
          <h1 className="text-[48px] font-[600] text-white">
            What people are saying about us
          </h1>
        </div>
        <div>
          <p className={`${styles.paragraph}`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-8 my-10 relative">
        {feedback.map((feed, index) => (
          <FeedBack key={index} feed={feed} />
        ))}
        <div className=" absolute z-0 w-[60%] h-[60%] top-[-100px] right-[-500px] pink__gradient" />
        <div className=" absolute z-0 w-[50%] h-[50%] top-[-100px] right-[-500px] blue__gradient" />
      </div>
    </section>
  );
};

export default Testimonials;

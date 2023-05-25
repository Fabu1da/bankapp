import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
const Business = () => {
  const BusinessCard = ({ feature: { icon, title, content } }) => {
    return (
      <div className="flex justify-start items-center p-5 feature-card rounded-xl cursor-pointer">
        <div className="bg-gradient p-5">
          <img src={icon} alt=" " />
        </div>
        <div className="text-white md:max-w-[450px] ">
          <h4 className="text-[18px] font-[600]">{title}</h4>
          <p className={styles.paragraph}>{content}</p>
        </div>
      </div>
    );
  };
  return (
    <section
      id="features"
      className={`${layout.section} ${styles.paddingY} gap-20`}
    >
      <div className={`${layout.sectionInfo} flex-1`}>
        <h2 className="text-[48px] text-white font-[600]">
          You do the business, <br className="hidden md:block" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph}`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button title="Get Started" />
      </div>

      <div>
        {features.map((feature, index) => (
          <BusinessCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;

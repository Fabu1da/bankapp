import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section
      id="features"
      className={`${layout.section} ${styles.paddingY} gap-20`}
    >
      <div className={`${layout.sectionInfo} flex-1`}>
        <h2 className="text-[48px] text-white font-[600] leading-[70px]">
          Find a better card deal <br className="hidden md:block" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} my-8`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button title="Get Started" />
      </div>

      <div className="flex-1">
        <img src={card} alt=" " />
      </div>
    </section>
  );
};

export default CardDeal;

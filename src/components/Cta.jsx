import React from "react";
import styles from "../style";
import Button from "./Button";

const Cta = () => {
  return (
    <div className={`${styles.paddingY}   `} id="product">
      <div className="bg-black-gradient rounded-lg flex md:flex-row flex-col justify-between items-center md:p-[50px] p-[25px]">
        <div>
          <h1 className="text-[48px] font-[600] text-white">
            Let’s try our service now!
          </h1>
          <p className={`${styles.paragraph}`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div>
          <Button title="Get Started" />
          {/* <button>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Cta;

import React from "react";
import styles from "../style";

import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <div
      className={`${styles.paddingY} flex md:flex-row flex-col items-center gap-20`}
    >
      <div className="flex-1 relative">
        <img src={bill} alt="" />
        <div className=" absolute z-0 w-[60%] h-[60%] top-0 pink__gradient" />
        <div className=" absolute z-0 w-[50%] h-[50%]  bottom-20 blue__gradient" />
      </div>
      <div className="flex-1">
        <h1 className="text-[48px] font-[600] text-white">
          Easily control your billing & invoicing.
        </h1>
        <p className={`${styles.paragraph} my-10`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row gap-8">
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Billing;

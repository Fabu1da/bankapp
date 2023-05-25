import React from "react";
import styles from "../style";
import { airbnb, binance, coinbase, dropbox } from "../assets";
const Client = () => {
  return (
    <div
      className={`${styles.paddingY} flex flex-row justify-between flex-wrap items-start px-20 `}
      id="clients"
    >
      <img src={airbnb} alt="" className="w-[193px] h-[60px]" />
      <img src={binance} alt="" className="w-[193px] h-[39px]" />
      <img src={coinbase} alt="" className="w-[193px] h-[41px]" />
      <img src={dropbox} alt="" className="w-[193px] h-[38px]" />
    </div>
  );
};

export default Client;

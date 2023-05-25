import React from "react";
import { stats } from "../constants";
const Stats = () => {
  return (
    <div>
      <div className="text-white text-center gap-[90px] text-[40px] flex md:flex-row flex-col items-center justify-between font-semibold">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-around flex-1   ">
            {stat.value}
            <span className="flex-1 flex justify-start text-gradient m-5 font-normal text-[20px]  ">
              {stat.title}
            </span>
            {stats.length - 1 != index && (
              <div className="w-[2px] h-[20px] bg-white m-7 rounded-full hidden md:block  " />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

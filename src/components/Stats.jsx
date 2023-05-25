import React from "react";
import { stats } from "../constants";
const Stats = () => {
  return (
    <div>
      <p className="text-white text-center text-[40px] flex md:flex-row flex-col items-center justify-center font-semibold">
        {stats.map((stat, index) => (
          <div key={index}>
            {stat.value}
            <span className="text-gradient m-5 font-normal text-[20px]  justify-center">
              {stat.title}
            </span>
            {stats.length - 1 !== index && (
              <i className="w-[2px] h-[20px] bg-white m-7 rounded-2xl"></i>
            )}
          </div>
        ))}
      </p>
    </div>
  );
};

export default Stats;

import React from "react";

const Button = ({ title }) => {
  return (
    <button
      type="button"
      className="bg-blue-gradient px-5 py-3 rounded-sm mt-5 text-[18px] font-[500] "
    >
      {title}
    </button>
  );
};

export default Button;

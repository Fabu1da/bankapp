import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => {
  const FooterLink = ({ individual: { name, link } }) => {
    return (
      <a href={link} className=" text-gray-400 mt-[12px]">
        {name}
      </a>
    );
  };
  return (
    <div className={`${styles.paddingY}`}>
      <div className="flex md:flex-row flex-col gap-[90px] py-[40px] pt-[72px] ">
        <div className="flex-1 max-w-[400px]">
          <img src={logo} alt="" />
          <p className={`${styles.paragraph}`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-1 flex md:flex-row flex-col ">
          {footerLinks.map((link, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col md:mt-0 mt-[15px] items-center"
              >
                <h4 className="text-[18px] font-[400] text-white">
                  {link.title}
                </h4>
                {link.links.map((individual, index) => {
                  return (
                    <FooterLink
                      individual={individual}
                      key={`footerlink-` + index}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.paragraph}  text-start border-t border-t-slate-800 py-5`}
      >
        Copyright &#169; 2023 HooBank. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

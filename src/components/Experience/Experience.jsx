import Image from "next/image";
import React from "react";
import divider from "../../../public/icons/divider.svg";
import verticalDivider from "../../../public/icons/vertical-divider.svg";

export const Experience = ({ textTr }) => {
  return (
    <div className="layout">
      <ul className=" bg-experience-bg rounded-3xl p-6 mb-20 lg:mb-24 lg:flex lg:py-14 lg:px-11">
        <li className="flex items-center md:block md:text-center lg:w-[305px]">
          <div className=" font-corsa mr-2.5 text-xl md:text-5xl w-10 md:w-[86px] md:ml-auto md:mr-auto">
            12+
          </div>
          <div className=" font-poiret md:text-3xl">
            {textTr.experienceFirst}
          </div>
        </li>
        <Image src={divider} alt="divider" className="py-6 w-full lg:hidden" />
        <Image
          src={verticalDivider}
          alt="divider"
          width={6}
          height={117}
          className=" lg:block lg:mx-6"
        />
        <li className="flex items-center md:block md:text-center lg:w-[305px]">
          <div className=" font-corsa mr-2.5 text-xl md:text-5xl w-10 md:w-[96px] md:ml-auto md:mr-auto">
            60+
          </div>
          <div className=" font-poiret md:text-3xl">
            {textTr.experienceSecond}
          </div>
        </li>
        <Image src={divider} alt="divider" className="py-6 w-full lg:hidden" />
        <Image
          src={verticalDivider}
          alt="divider"
          width={6}
          height={117}
          className=" lg:block lg:mx-6"
        />
        <li className="flex items-center md:block md:text-center lg:w-[413px]">
          <div className=" font-corsa mr-2.5 text-xl md:text-5xl w-16 md:w-[60px] md:ml-auto md:mr-auto">
            2+
          </div>
          <div className=" font-poiret md:text-3xl">
            {textTr.experienceThird}
          </div>
        </li>
      </ul>
    </div>
  );
};

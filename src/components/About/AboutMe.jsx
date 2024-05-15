import Image from "next/image";
import React from "react";
import logo from "../../../public/icons/logo.svg";
import iconClose from "../../../public/icons/close-btn.svg";
import waves from "../../../public/icons/snake.svg";

export const AboutMe = ({ textTr, setIsOpen }) => {
  return (
    <div className="bg-[#fffefb] pb-6">
      <div className="layout flex justify-between bg-gradient-header py-2 mb-9">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="md:w-[70px] md:h-[70px]"
        />
        <Image
          src={iconClose}
          alt="iconClose"
          width={40}
          height={40}
          onClick={() => setIsOpen(false)}
          className="md:w-[70px] md:h-[70px]"
        />
      </div>
      <div className="layout">
        <div className="mb-8 text-center">
          <h1 className="text-xl md:text-5xl font-corsa">
            {textTr.aboutTitle}
          </h1>
          <Image src={waves} alt="waves" className="mr-auto ml-auto" />
        </div>
        <p className=" text-justify font-poiret mb-6 md:text-3xl">
          {textTr.aboutDesc}
        </p>

        <h3 className="font-poiret mb-2.5 md:text-3xl">
          {textTr.adoutPrincipleTitle}
        </h3>
        <ul className="mb-8">
          <li className="flex">
            <div className="font-poiret mr-4 md:text-3xl">-</div>
            <p className="font-poiret text-justify md:text-3xl">
              {textTr.adoutPrinciple1}
            </p>
          </li>
          <li className="flex">
            <div className="font-poiret mr-4 md:text-3xl">-</div>
            <p className="font-poiret text-justify md:text-3xl">
              {textTr.adoutPrinciple2}
            </p>
          </li>
          <li className="flex">
            <div className="font-poiret mr-4 md:text-3xl">-</div>
            <p className="font-poiret text-justify md:text-3xl">
              {textTr.adoutPrinciple3}
            </p>
          </li>
          <li className="flex">
            <div className="font-poiret mr-4 md:text-3xl">-</div>
            <p className="font-poiret text-justify md:text-3xl">
              {textTr.adoutPrinciple4}
            </p>
          </li>
          <li className="flex">
            <div className="font-poiret mr-4 md:text-3xl">-</div>
            <p className="font-poiret text-justify md:text-3xl">
              {textTr.adoutPrinciple5}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

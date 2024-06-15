import Image from "next/image";
import React from "react";
import logo from "../../../public/icons/logo.svg";
import iconClose from "../../../public/icons/close-btn.svg";
import snake from "../../../public/icons/snake.svg";

export const AboutMe = ({ textTr, setIsOpen }) => {
  return (
    <div className="relatibe">
      <div className="bg-[#fffefb] p-5 h-full border border-dashed rounded-lg mt-10 mr-5 ml-5 md:mr-10 md:ml-10 lg:mr-[100px] lg:ml-[100px]">
        <div className=" flex justify-end">
          <Image
            src={iconClose}
            alt="iconClose"
            width={40}
            height={40}
            onClick={() => setIsOpen(false)}
            className=" rounded-lg md:w-[70px] md:h-[70px] lg:w-12 lg:h-12 bg-btn-active cursor-pointer"
          />
        </div>
        <div className="">
          <div className="mb-8 text-center">
            <h1 className="text-xl md:text-5xl font-corsa">
              {textTr.aboutTitle}
            </h1>
            <Image
              src={snake}
              alt="snake-icon"
              className="mr-auto ml-auto md:w-[332px]"
            />
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
    </div>
  );
};

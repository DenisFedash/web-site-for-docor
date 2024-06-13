import Image from "next/image";
import React from "react";
import logo from "../../../../public/icons/logo.svg";
import iconClose from "../../../../public/icons/close-btn.svg";
import leftBracket from "../../../../public/icons/left-bracket.svg";
import rightBracket from "../../../../public/icons/right-bracket.svg";
import Link from "next/link";

export const Consultation2 = ({ textTr, setIsOpen2 }) => {
  return (
    <div className="bg-[#fffefb]">
      <div className="">
        <div className=" flex justify-between bg-[#FFDF44] py-2 mb-8 fixed w-full pl-5 pr-5 md:pl-10 md:pr-10">
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="md:w-[70px] md:h-[70px]"
          />
          <div>
            <Image
              src={iconClose}
              alt="iconClose"
              width={40}
              height={40}
              onClick={() => setIsOpen2(false)}
              className="z-0 md:w-[70px] md:h-[70px]"
            />
          </div>
        </div>
        <div className="pl-5 pr-5 md:pl-10 md:pr-10 pb-6 md:pb-12">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="mt-24 flex items-center justify-center">
              <Image src={leftBracket} alt="left-bracket" />
              <h2 className=" text-center text-xl md:text-3xl font-corsa">
                {textTr.consult2Title}
              </h2>
              <Image src={rightBracket} alt="right-bracket" />
            </div>
          </div>
          <ul className="mb-8 md:mb-12">
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10 text-justify">
              {textTr.consult2Option1}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10 text-justify">
              {textTr.consult2Get1}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10 text-justify">
              {textTr.consult2Option3}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10 text-justify">
              {textTr.consult2Option4}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10 text-justify">
              {textTr.consult2Option5}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl text-justify">
              {textTr.consult2Option6}
            </li>
          </ul>

          <Link href="#formMes" onClick={() => setIsOpen2(false)}>
            <h2 className="text-center font-poiret bg-btn-bg py-5 rounded-full w-full hover:bg-btn-active md:text-3xl">
              {textTr.consultBtnSign}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import React from "react";
import logo from "../../../../public/icons/logo.svg";
import iconClose from "../../../../public/icons/close-btn.svg";
import leftBracket from "../../../../public/icons/left-bracket.svg";
import rightBracket from "../../../../public/icons/right-bracket.svg";
import doubleUnderlines from "../../../../public/icons/double-underlines.svg";
import Link from "next/link";

export const Consultation4 = ({ textTr, setIsOpen4 }) => {
  return (
    <div className="bg-[#fffefb]">
      <div className="">
        <div className=" flex justify-between bg-gradient-header py-2 mb-8 fixed w-full layout">
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
              onClick={() => setIsOpen4(false)}
              className="z-0 md:w-[70px] md:h-[70px]"
            />
          </div>
        </div>
        <div className="layout pb-6 md:pb-12">
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="mt-24 flex items-center justify-center">
              <Image src={leftBracket} alt="left-bracket" />
              <h2 className=" text-center text-xl md:text-3xl font-corsa flex">
                <div className="mr-4"> {textTr.consult4Name1}</div>
                <div className=" relative">
                  <div className=" text-[#A68D6E] mr-4">
                    {textTr.consult4Name11}
                  </div>
                  <div className="absolute md:-bottom-2.5 left-0 w-[35px] md:w-[50px]">
                    <Image
                      src={doubleUnderlines}
                      alt="double-underlines"
                      width={120}
                      height={6}
                    />
                  </div>
                </div>
                <div>{textTr.consult4Name12}</div>
              </h2>
              <Image src={rightBracket} alt="right-bracket" />
            </div>
          </div>
          <ul className="mb-8 md:mb-12">
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10">
              {textTr.consult4Option1}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10">
              {textTr.consult4Get1}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10">
              {textTr.consult4Option3}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl">
              {textTr.consult4Option4}
            </li>
          </ul>
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <Image src={leftBracket} alt="left-bracket" />
            <h2 className=" text-center text-xl font-corsa md:text-3xl md:flex ">
              <div className="mr-2 md:mr-4"> {textTr.consult4Name2}</div>
              <div className="relative">
                <div className=" text-[#A68D6E] mr-2 md:mr-4">
                  {textTr.consult4Name21}
                </div>
                <div className="absolute md:-bottom-4 left-12 md:left-0 w-[80px] md:w-[120px] ">
                  <Image
                    src={doubleUnderlines}
                    alt="double-underlines"
                    width={120}
                    height={6}
                  />
                </div>
              </div>
              <div>{textTr.consult4Name22}</div>
            </h2>
            <Image src={rightBracket} alt="right-bracket" />
          </div>
          <ul className="mb-8 md:mb-12">
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10">
              {textTr.consult4Get1}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl md:mb-10">
              {textTr.consult4Get2}
            </li>
            <li className=" font-poiret mb-8 md:text-3xl">
              {textTr.consult4Get3}
            </li>
          </ul>
          <Link href="#formMes" onClick={() => setIsOpen4(false)}>
            <h2 className="text-center font-poiret bg-btn-bg py-5 rounded-full w-full hover:bg-btn-active md:text-3xl">
              {textTr.consultBtnSign}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

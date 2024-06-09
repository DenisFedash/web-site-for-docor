"use client";
import Image from "next/image";
import React, { useState } from "react";
import longSnake from "../../../public/icons/long-snake.svg";
import brain from "../../../public/icons/icon-brain.svg";
import iconHeadLock from "../../../public/icons/icon-head-lock.svg";
import iconHeadHeart from "../../../public/icons/icon-head-heart.svg";
import iconHeadPuzzle from "../../../public/icons/icon-head-puzzle.svg";
import clock from "../../../public/icons/sand-clock.svg";
import currency from "../../../public/icons/icon-currency.svg";
import green from "../../../public/icons/icon-green.svg";
import lines from "../../../public/icons/lines.svg";
import { Consultation1 } from "./About consultations/Consultation1";
import Link from "next/link";
import { Consultation2 } from "./About consultations/Consultation2";
import { Consultation3 } from "./About consultations/Consultation3";
import { Consultation4 } from "./About consultations/Consultation4";

export const Consultations = ({ textTr }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div id="consultations" className="layout relative mb-20">
      <div>
        <div className="mb-8">
          <h1 className=" text-center text-xl md:text-5xl font-corsa">
            {textTr.consultTitle}
          </h1>
          <Image
            src={longSnake}
            alt="long-snake"
            width={141}
            className=" ml-auto mr-auto md:w-[332px]"
          />
        </div>
        <ul className="">
          <li className="mb-14 border border-[#A68D6E] rounded-3xl p-6 bg-white">
            <div className="flex items-center mb-5">
              <Image
                src={brain}
                alt="icon-brain"
                width={39}
                height={47}
                className="mr-6 md:w-[78px] md:h-[95px]"
              />
              <h2 className=" font-corsa md:text-3xl">
                {textTr.consultCardTitle1}
              </h2>
            </div>
            <p className=" font-poiret text-justify mb-5 md:text-3xl">
              {textTr.consultCardText1}
            </p>
            <div className="flex items-center mb-5">
              <Image src={clock} alt="clock" className="mr-4 md:w-9 md:h-9" />
              <p className=" font-poiret md:text-3xl">
                {textTr.consultCardDur1}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <Image
                src={currency}
                alt="currency"
                className="mr-4 md:w-9 md:h-9"
              />
              <p className=" font-poiret md:text-3xl">
                {textTr.consultCardPrice1}
              </p>
            </div>
            <Link href="#formMes">
              <h2 className="mb-6 text-center bg-btn-bg rounded-full w-full py-3.5 font-poiret hover:bg-btn-active md:text-3xl">
                {textTr.consultBtnSign}
              </h2>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen1(true)}
              className="rounded-full w-full py-3.5 font-poiret border border-dashed hover:bg-btn-active hover:border-[#FFDF44] md:text-3xl"
            >
              {textTr.consultBtnDesc}
            </button>
          </li>
          <Image src={lines} alt="lines" className="w-full mb-14" />
          <li className="mb-14 border border-[#A68D6E] rounded-3xl p-6 bg-white">
            <div className="flex items-center mb-5">
              <Image
                src={iconHeadLock}
                alt="icon-brain"
                width={39}
                height={47}
                className="mr-6 md:w-[78px] md:h-[95px]"
              />
              <h2 className=" font-corsa md:text-3xl">
                {textTr.consultCardTitle2}
              </h2>
            </div>
            <p className=" font-poiret text-justify mb-5 md:text-3xl">
              {textTr.consultCardText2}
            </p>
            <div className="flex items-center mb-5">
              <Image src={clock} alt="clock" className="mr-4 md:w-9 md:h-9" />
              <p className=" font-poiret md:text-3xl">
                {textTr.consultCardDur2}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <Image
                src={currency}
                alt="currency"
                className="mr-4 md:w-9 md:h-9"
              />
              <p className=" font-poiret md:text-3xl">
                {textTr.consultCardPrice2}
              </p>
            </div>
            <Link href="#formMes">
              <h2 className="mb-6 text-center bg-btn-bg rounded-full w-full py-3.5 font-poiret hover:bg-btn-active md:text-3xl">
                {textTr.consultBtnSign}
              </h2>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen2(true)}
              className="rounded-full w-full py-3.5 font-poiret border border-dashed hover:bg-btn-active hover:border-[#FFDF44] md:text-3xl"
            >
              {textTr.consultBtnDesc}
            </button>
          </li>
          <Image src={lines} alt="lines" className="w-full mb-14" />
          <li className="mb-14 border border-[#A68D6E] rounded-3xl p-6 bg-white">
            <div className="flex items-center mb-5">
              <Image
                src={iconHeadHeart}
                alt="icon-brain"
                width={39}
                height={47}
                className="mr-6 md:w-[78px] md:h-[95px]"
              />
              <h2 className=" font-corsa md:text-3xl">
                {textTr.consultCardTitle3}
              </h2>
            </div>
            <p className=" font-poiret text-justify mb-5 md:text-3xl">
              {textTr.consultCardText3}
            </p>
            <div className="flex items-center mb-5">
              <Image src={clock} alt="clock" className="mr-4 md:w-9 md:h-9" />
              <p className=" font-poiret md:text-3xl">
                {textTr.consultCardDur3}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <Image
                src={currency}
                alt="currency"
                className="mr-4 md:w-9 md:h-9"
              />
              <p className=" font-poiret md:text-3xl">
                {textTr.consultCardPrice3}
              </p>
            </div>
            <Link href="#formMes">
              <h2 className="mb-6 text-center bg-btn-bg rounded-full w-full py-3.5 font-poiret hover:bg-btn-active md:text-3xl">
                {textTr.consultBtnSign}
              </h2>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen3(true)}
              className="rounded-full w-full py-3.5 font-poiret border border-dashed hover:bg-btn-active hover:border-[#FFDF44] md:text-3xl"
            >
              {textTr.consultBtnDesc}
            </button>
          </li>
          <Image src={lines} alt="lines" className="w-full mb-14" />
          <li className="mb-14 border border-[#A68D6E] rounded-3xl p-6 bg-white">
            <div className="flex items-center mb-5">
              <Image
                src={iconHeadPuzzle}
                alt="icon-brain"
                width={39}
                height={47}
                className="mr-6 md:w-[78px] md:h-[95px]"
              />
              <h2 className=" font-corsa md:text-3xl">
                {textTr.consultCardTitle4}
              </h2>
            </div>
            <p className=" font-poiret text-justify mb-5 md:text-3xl">
              {textTr.consultCardText4}
            </p>
            <div className="flex items-center mb-5">
              <Image src={clock} alt="clock" className="mr-4 md:w-9 md:h-9" />
              <p className=" font-poiret md:text-3xl">
                {textTr.consultCardDur4}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <Image
                src={currency}
                alt="currency"
                className="mr-4 md:w-9 md:h-9"
              />
              <p className=" font-poiret md:text-3xl">
                {textTr.consultCardPrice3}
              </p>
            </div>
            <Link href="#formMes">
              <h2 className="mb-6 text-center bg-btn-bg rounded-full w-full py-3.5 font-poiret hover:bg-btn-active hover:border-[#FFDF44] md:text-3xl">
                {textTr.consultBtnSign}
              </h2>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen4(true)}
              className="rounded-full w-full py-3.5 font-poiret border border-dashed hover:bg-btn-active md:text-3xl"
            >
              {textTr.consultBtnDesc}
            </button>
          </li>
        </ul>
      </div>
      <div
        className={
          isOpen1
            ? "top-0 left-0 z-10 fixed overflow-auto max-h-full"
            : "hidden"
        }
      >
        <Consultation1 textTr={textTr} setIsOpen1={setIsOpen1} />
      </div>
      <div
        className={
          isOpen2
            ? "top-0 left-0 z-10 fixed overflow-auto max-h-full"
            : "hidden"
        }
      >
        <Consultation2 textTr={textTr} setIsOpen2={setIsOpen2} />
      </div>

      <div
        className={
          isOpen3
            ? "top-0 left-0 z-10 fixed overflow-auto max-h-full"
            : "hidden"
        }
      >
        <Consultation3 textTr={textTr} setIsOpen3={setIsOpen3} />
      </div>

      <div
        className={
          isOpen4
            ? "top-0 left-0 z-10 fixed overflow-auto max-h-full"
            : "hidden"
        }
      >
        <Consultation4 textTr={textTr} setIsOpen4={setIsOpen4} />
      </div>

      <Image
        src={green}
        alt="green"
        className="absolute -top-6 -left-4 -z-10"
      />
    </div>
  );
};

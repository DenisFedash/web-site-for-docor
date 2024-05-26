"use client";
import Image from "next/image";
import React, { useState } from "react";
import snake from "../../../public/icons/snake.svg";
import arrow from "../../../public/icons/arrow.svg";
import { AboutMe } from "./AboutMe";

export const About = ({ textTr }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });

  const toggleTextVisibility = (section) => {
    setIsTextVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <div id="about" className="layout mb-16 md:mb-[108px] ">
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="text-xl md:text-5xl font-corsa">{textTr.aboutTitle}</h1>
        <Image
          src={snake}
          alt="snake-icon"
          className="mr-auto ml-auto md:w-[332px]"
        />
      </div>
      <div className="lg:grid lg:gap-10 lg:grid-cols-2">
        <div className="mb-8 md:mb-12">
          <button
            type="button"
            className={`font-poiret  py-2.5 rounded-full w-full mb-2.5 ${
              isTextVisible.first
                ? " bg-btn-active lg:rounded-[40px] lg:rounded-b-none"
                : "bg-btn-bg"
            }`}
            onClick={() => toggleTextVisibility("first")}
          >
            <p className="md:text-3xl md:py-[11px] md:px-[107px] lg:px-6">
              {textTr.aboutBtnFirst}
            </p>
          </button>
          {isTextVisible.first && (
            <div
              className={`text-container overflow-hidden transition-max-height ${
                isTextVisible.first
                  ? "max-h-96 lg:max-h-[500px] lg:bg-[#FEFEFE] lg:shadow-lg lg:pb-[297px] lg:px-6"
                  : "max-h-0"
              }`}
            >
              <Image
                src={arrow}
                alt="arrow-icon"
                className="ml-auto mr-auto mb-2"
              />
              <p className="font-poiret text-justify md:text-3xl">
                {textTr.aboutTextFirst}
              </p>
            </div>
          )}
        </div>
        <div className="mb-8 md:mb-12">
          <button
            type="button"
            className={`font-poiret  py-5 lg:py-2.5 rounded-full w-full ${
              isTextVisible.second
                ? " bg-btn-active lg:rounded-[40px] lg:rounded-b-none"
                : "bg-btn-bg"
            }`}
            onClick={() => toggleTextVisibility("second")}
          >
            <p className="md:text-3xl md:py-[11px] md:px-[107px] lg:px-[151px]">
              {textTr.aboutBtnSecond}
            </p>
          </button>
          {isTextVisible.second && (
            <div
              className={`text-container overflow-hidden transition-max-height ${
                isTextVisible.second
                  ? "max-h-96 lg:max-h-[500px] lg:bg-[#FEFEFE] lg:shadow-lg lg:px-6 lg:pb-20"
                  : "max-h-0"
              }`}
            >
              <Image
                src={arrow}
                alt="arrow-icon"
                className="ml-auto mr-auto mb-2"
              />
              <p className="font-poiret text-justify md:text-3xl">
                {textTr.aboutTextSecond}
              </p>
            </div>
          )}
        </div>
        <div className="mb-8 md:mb-12">
          <button
            type="button"
            className={`font-poiret  py-2.5 rounded-full w-full mb-2.5 ${
              isTextVisible.third
                ? " bg-btn-active lg:rounded-[40px] lg:rounded-b-none"
                : "bg-btn-bg"
            }`}
            onClick={() => toggleTextVisibility("third")}
          >
            <p className="md:text-3xl md:py-[11px] md:px-[107px] lg:px-6">
              {textTr.aboutBtnThird}
            </p>
          </button>
          {isTextVisible.third && (
            <div
              className={`text-container overflow-hidden transition-max-height ${
                isTextVisible.third
                  ? "max-h-96 lg:max-h-[500px] lg:bg-[#FEFEFE] lg:shadow-lg lg:pb-[297px] lg:px-6"
                  : "max-h-0"
              }`}
            >
              <Image
                src={arrow}
                alt="arrow-icon"
                className="ml-auto mr-auto mb-2"
              />
              <p className="font-poiret text-justify md:text-3xl">
                {textTr.aboutTextThird}
              </p>
            </div>
          )}
        </div>
        <div className="mb-12">
          <button
            type="button"
            className={`font-poiret  py-2.5 rounded-full w-full mb-2.5 ${
              isTextVisible.fourth
                ? " bg-btn-active lg:rounded-[40px] lg:rounded-b-non"
                : "bg-btn-bg"
            }`}
            onClick={() => toggleTextVisibility("fourth")}
          >
            <p className="md:text-3xl md:py-[11px] md:px-[107px] lg:px-6">
              {textTr.aboutBtnFourth}
            </p>
          </button>
          {isTextVisible.fourth && (
            <div
              className={`text-container overflow-hidden transition-max-height ${
                isTextVisible.fourth
                  ? "max-h-96 lg:max-h-[500px] lg:bg-[#FEFEFE] lg:shadow-lg lg:pb-[297px] lg:px-6"
                  : "max-h-0"
              }`}
            >
              <Image
                src={arrow}
                alt="arrow-icon"
                className="ml-auto mr-auto mb-2"
              />
              <p className="font-poiret text-justify md:text-3xl">
                {textTr.aboutTextFourth}
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        className=" text-center font-poiret underline text-[#A68D6E] md:text-3xl"
        onClick={() => setIsOpen(true)}
      >
        {textTr.aboutMore}
      </div>

      <div
        className={
          isOpen ? "top-0 left-0 z-10 fixed overflow-auto max-h-full" : "hidden"
        }
      >
        <AboutMe textTr={textTr} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

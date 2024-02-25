"use client";
import Image from "next/image";
import React, { useState } from "react";
import snake from "../../../public/icons/snake.svg";
import arrow from "../../../public/icons/arrow.svg";

export const About = ({ textTr }) => {
  const [isTextVisible, setIsTextVisible] = useState({
    first: false,
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
    <div className="layout mb-16">
      <div className="mb-8 text-center">
        <h1 className="text-xl font-corsa">{textTr.aboutTitle}</h1>
        <Image src={snake} alt="snake-icon" className="mr-auto ml-auto" />
      </div>
      <div className="mb-8">
        <button
          type="button"
          className={`font-poiret  py-2.5 rounded-full w-full mb-2.5 ${
            isTextVisible.first ? " bg-btn-active" : "bg-btn-bg"
          }`}
          onClick={() => toggleTextVisibility("first")}
        >
          <p className="">{textTr.aboutBtnFirst}</p>
        </button>
        {isTextVisible.first && (
          <div
            className={`text-container overflow-hidden transition-max-height ${
              isTextVisible.first ? "max-h-96" : "max-h-0"
            }`}
          >
            <Image
              src={arrow}
              alt="arrow-icon"
              className="ml-auto mr-auto mb-2"
            />
            <p className="font-poiret text-justify">{textTr.aboutTextFirst}</p>
          </div>
        )}
      </div>
      <div className="mb-8">
        <button
          type="button"
          className={`font-poiret  py-5 rounded-full w-full mb-2.5 ${
            isTextVisible.second ? " bg-btn-active" : "bg-btn-bg"
          }`}
          onClick={() => toggleTextVisibility("second")}
        >
          <p className="">{textTr.aboutBtnSecond}</p>
        </button>
        {isTextVisible.second && (
          <div
            className={`text-container overflow-hidden transition-max-height ${
              isTextVisible.second ? "max-h-96" : "max-h-0"
            }`}
          >
            <Image
              src={arrow}
              alt="arrow-icon"
              className="ml-auto mr-auto mb-2"
            />
            <p className="font-poiret text-justify">{textTr.aboutTextSecond}</p>
          </div>
        )}
      </div>
      <div className="mb-8">
        <button
          type="button"
          className={`font-poiret  py-2.5 rounded-full w-full mb-2.5 ${
            isTextVisible.third ? " bg-btn-active" : "bg-btn-bg"
          }`}
          onClick={() => toggleTextVisibility("third")}
        >
          <p className="">{textTr.aboutBtnThird}</p>
        </button>
        {isTextVisible.third && (
          <div
            className={`text-container overflow-hidden transition-max-height ${
              isTextVisible.third ? "max-h-96" : "max-h-0"
            }`}
          >
            <Image
              src={arrow}
              alt="arrow-icon"
              className="ml-auto mr-auto mb-2"
            />
            <p className="font-poiret text-justify">{textTr.aboutTextThird}</p>
          </div>
        )}
      </div>
      <div className="mb-12">
        <button
          type="button"
          className={`font-poiret  py-2.5 rounded-full w-full mb-2.5 ${
            isTextVisible.fourth ? " bg-btn-active" : "bg-btn-bg"
          }`}
          onClick={() => toggleTextVisibility("fourth")}
        >
          <p className="">{textTr.aboutBtnFourth}</p>
        </button>
        {isTextVisible.fourth && (
          <div
            className={`text-container overflow-hidden transition-max-height ${
              isTextVisible.fourth ? "max-h-96" : "max-h-0"
            }`}
          >
            <Image
              src={arrow}
              alt="arrow-icon"
              className="ml-auto mr-auto mb-2"
            />
            <p className="font-poiret text-justify">{textTr.aboutTextFourth}</p>
          </div>
        )}
      </div>
      <div className=" text-center font-poiret underline text-[#A68D6E]">
        {textTr.aboutMore}
      </div>
    </div>
  );
};

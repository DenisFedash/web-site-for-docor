"use client";
import React, { useEffect, useState, useRef } from "react";
import { useForm, useFetch } from "@formspree/react";
import arrow from "../../../public/icons/down-arrow.svg";
import check from "../../../public/icons/check.svg";

import Image from "next/image";
import waveLine from "../../../public/icons/snake.svg";

export const FormMessage = ({ textTr }) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [state, handleSubmit, resetState] = useForm("xzbnajky");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConsult, setIsOpenConsult] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setIsOpen(true);
    }
  }, [state.succeeded]);

  const resetSucceed = () => {
    resetState();
    setIsOpen(false);
    setCheckboxChecked(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup function to reset overflow style when component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [state.succeeded]);

  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
  };

  return (
    <div id="formMes" className="layout mb-20">
      {state.succeeded && isOpen && (
        <div className="fixed top-10 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-75 text-center overflow-hidden z-10">
          <div className="bg-[#fffefb] p-6 rounded-lg w-[250px] h-[250px] border border-dashed">
            <p className="pt-5 text-xl font-poiret mb-10">
              {textTr.RequestMessage}
            </p>
            <button
              className="font-poiret bg-btn-bg py-2.5 rounded-full w-[100px]"
              onClick={resetSucceed}
            >
              {textTr.RequestClose}
            </button>
          </div>
        </div>
      )}
      <div className="mb-8 md:mb-12">
        <h2 className="text-center font-corsa text-xl md:text-5xl">
          {textTr.FormTitle}
        </h2>
        <Image
          src={waveLine}
          alt="waves"
          width={191}
          height={11}
          className="ml-auto mr-auto md:w-[458px]"
        />
      </div>
      <h2 className="ml-auto mr-auto text-center font-corsa text-xl md:text-3xl mb-4 md:mb-12 w-full">
        {textTr.FormNameTitle}
      </h2>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="font-poiret md:text-3xl">
            {textTr.FormName}
          </label>
          <input
            id="name"
            type="name"
            name="name"
            required
            className="border border-border-color rounded-lg h-[54px] p-2.5 md:text-3xl"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="font-poiret md:text-3xl">
            {textTr.FormEmail}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border border-border-color rounded-lg h-[54px] p-2.5 md:text-3xl"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="connect" className="font-poiret md:text-3xl">
            {textTr.FormConnect}
          </label>
          <input
            id="connect"
            type="connect"
            name="connect"
            required
            className="border border-border-color rounded-lg h-[54px] p-2.5 md:text-3xl"
          />
        </div>
        <div className="flex flex-col mb-4 relative">
          <label htmlFor="selectOption" className="font-poiret md:text-3xl">
            {textTr.FormOptions}
          </label>
          <select
            id="selectOption"
            name="selectOption"
            required
            className="border border-border-color rounded-lg h-[54px] p-2.5 pr-10 appearance-none font-poiret select-option md:text-3xl"
          >
            <option value="">{textTr.FormOptions}</option>
            <option value={textTr.FormOption1}>{textTr.FormOption1}</option>
            <option value={textTr.FormOption2}>{textTr.FormOption2}</option>
            <option value={textTr.FormOption3}>{textTr.FormOption3}</option>
            <option value={textTr.FormOption4}>{textTr.FormOption4}</option>
          </select>
          <Image
            src={arrow}
            alt="arrow"
            width={18}
            height={18}
            className="absolute inset-y-0 top-12 md:top-14 right-2 mr-3 text-gray-500 pointer-events-none"
          />
        </div>
        <div className="flex flex-col mb-6 relative">
          <label htmlFor="message" className="font-poiret md:text-3xl">
            {textTr.FormMessage}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            minLength="10"
            maxLength="1000"
            required
            className="border border-border-color rounded-lg h-[224px] p-2.5 md:text-3xl"
          />
        </div>

        <div className="mb-6">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
            className="hidden"
          />
          <label htmlFor="agreement" className="flex items-center">
            <div
              className={`w-9 h-8 border border-border-color rounded-md flex items-center justify-center mr-2 ${
                checkboxChecked ? "bg-btn-bg" : ""
              }`}
            >
              {!checkboxChecked ? (
                ""
              ) : (
                <Image src={check} alt="check" width={20} height={9} />
              )}
            </div>
            <div className="font-poiret md:text-3xl">{textTr.FormCheckbox}</div>
          </label>
        </div>
        <button
          type="submit"
          disabled={state.submitting || !checkboxChecked}
          className="font-poiret bg-btn-bg py-5 rounded-full w-full hover:bg-btn-active md:text-3xl"
        >
          {textTr.FormBtn}
        </button>
      </form>
    </div>
  );
};

"use client";
import Image from "next/image";
import React, { useState } from "react";
import lines from "../../../public/icons/lines.svg";
import avatar from "../../../public/img/avatar.jpg";
import Link from "next/link";
import { Payment } from "../Payment/Payment";

export const Hero = ({ textTr }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (prev) => {
    setIsOpen(!prev);
  };

  return (
    <div className="layout pt-20 mb-16">
      <div className="mb-24 md:mb-[170px] relative">
        <h1 className=" font-corsa uppercase text-[46px] md:text-[86px] font-bold md:font-normal">
          {textTr.heroFirstName}
          <div className="absolute font-light md:font-normal right-0">
            {textTr.heroLastName}
          </div>
        </h1>
        <div className=" w-[295px] md:w-[550px] md:h-4 ml-5 md:ml-[155px] absolute right-0 top-[130px] md:top-[240px]">
          <Image src={lines} alt="lines" />
        </div>
      </div>
      <div className="mb-8 md:mb-12">
        <p className=" font-poiret md:text-3xl">{textTr.heroText}</p>
      </div>
      <div>
        <Image
          src={avatar}
          alt="photo"
          width={680}
          height={503}
          className="ml-auto mr-auto rounded-xl mb-8 md:mb-12"
        />
      </div>

      <Link href="#formMes">
        <h2 className="text-base text-center font-poiret bg-btn-bg py-5 rounded-full w-full hover:bg-btn-active">
          {textTr.heroBtn}
        </h2>
      </Link>
      {/* <Payment /> */}
    </div>
  );
};

"use client";
import Image from "next/image";
import React, { useState } from "react";
import lines from "../../../public/icons/lines.svg";
import tabletLines from "../../../public/icons/tablet-lines.svg";
import avatar from "../../../public/img/avatar.jpg";
import Link from "next/link";
import { Payment } from "../Payment/Payment";

export const Hero = ({ textTr }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (prev) => {
    setIsOpen(!prev);
  };

  return (
    <div className="layout mt-20 mb-16 lg:mt-[160px] lg:mb-24">
      <div className="lg:flex lg:justify-between">
        <div className="">
          <div className="mb-24 md:mb-[170px] relative">
            <h1 className=" font-corsa uppercase text-[46px] md:text-[86px] font-bold md:font-normal lg:mb-6">
              {textTr.heroFirstName}
              <div className="absolute font-light md:font-normal right-0 lg:right-24">
                {textTr.heroLastName}
                <div className="self-stretch md:h-4 -mt-2">
                  <Image src={lines} alt="lines" />
                </div>
              </div>
            </h1>
          </div>
          <div className="mb-8 md:mb-12">
            <p className=" font-poiret md:text-3xl">{textTr.heroText}</p>
          </div>
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
      </div>

      <Link href="#formMes">
        <h2 className="text-base md:text-3xl text-center font-poiret bg-btn-bg py-5 rounded-full w-full hover:bg-btn-active lg:w-[454px]">
          {textTr.heroBtn}
        </h2>
      </Link>
      {/* <Payment /> */}
    </div>
  );
};

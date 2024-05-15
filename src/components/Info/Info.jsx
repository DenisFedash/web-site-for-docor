import Image from "next/image";
import React from "react";
import bigCircle from "../../../public/icons/big-circle.svg";

export const Info = ({ textTr }) => {
  return (
    <div className="relative">
      <div className="layout mb-24 md:my-[130px]">
        <div className=" font-poiret text-justify md:text-3xl">
          {textTr.infoText}
        </div>
        <Image
          src={bigCircle}
          alt="circle"
          className="absolute -top-9 left-1 md:w-[756px] md:h-[342px] md:-top-24"
        />
      </div>
    </div>
  );
};

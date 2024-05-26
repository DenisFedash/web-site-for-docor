import Image from "next/image";
import React from "react";
import bigCircle from "../../../public/icons/big-circle.svg";
import descBigCircle from "../../../public/icons/desc-big-circle.svg";

export const Info = ({ textTr }) => {
  return (
    <div className="relative flex justify-center items-center mb-20">
      <div className="layout w-full max-w-screen-lg">
        <Image
          src={bigCircle}
          alt="bigCircle"
          layout="responsive"
          width={1240}
          height={245}
          className="object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          <p className="layout font-poiret text-justify md:text-3xl">
            {textTr.infoText}
          </p>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import React from "react";
import bigCircle from "../../../public/icons/big-circle.svg";

export const Info = ({ textTr }) => {
  return (
    <div className="relative">
      <div className="layout mb-24">
        <div className=" font-poiret text-justify">{textTr.infoText}</div>
        <Image
          src={bigCircle}
          alt="circle"
          className="absolute -top-7 left-1"
        />
      </div>
    </div>
  );
};

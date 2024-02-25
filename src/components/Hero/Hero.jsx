import Image from "next/image";
import React from "react";
import lines from "../../../public/icons/lines.svg";
import photoMobile from "../../../public/img/pic-mobile.jpg";

export const Hero = ({ textTr }) => {
  return (
    <div className="layout mb-16">
      <div className="mb-8">
        <h1 className=" font-corsa uppercase text-[46px] font-bold">
          {textTr.heroFirstName}
          <div className="ml-11 font-light">{textTr.heroLastName}</div>
        </h1>
        <div className=" w-[327px] ml-5">
          <Image src={lines} alt="lines" />
        </div>
      </div>
      <div className="">
        <p className=" font-poiret">{textTr.heroText}</p>
      </div>
      <div>
        <Image src={photoMobile} alt="photo" width={350} height={343} />
      </div>
      <button
        type="button"
        className=" font-poiret bg-btn-bg py-5 rounded-full w-full"
      >
        <p className="text-base">{textTr.heroBtn}</p>
      </button>
    </div>
  );
};

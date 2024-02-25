import Image from "next/image";
import React from "react";
import divider from "../../../public/icons/divider.svg";

export const Experience = ({ textTr }) => {
  return (
    <div className="layout">
      <ul className=" bg-experience-bg rounded-3xl p-6 mb-20">
        <li className="flex items-center">
          <div className=" font-corsa mr-2.5 text-xl w-10">12+</div>
          <div className=" font-poiret">{textTr.experienceFirst}</div>
        </li>
        <Image src={divider} alt="divider" className="py-6" />
        <li className="flex items-center">
          <div className=" font-corsa mr-2.5 text-xl w-10">60+</div>
          <div className=" font-poiret">{textTr.experienceSecond}</div>
        </li>
        <Image src={divider} alt="divider" className="py-6" />
        <li className="flex items-center">
          <div className=" font-corsa mr-2.5 text-xl w-16">2+</div>
          <div className=" font-poiret text-justify">
            {textTr.experienceThird}
          </div>
        </li>
      </ul>
    </div>
  );
};

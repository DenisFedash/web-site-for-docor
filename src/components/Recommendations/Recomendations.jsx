import Image from "next/image";
import React from "react";
import circle from "../../../public/icons/circle.svg";
import longSnake from "../../../public/icons/long-snake.svg";

export const Recommendations = ({ textTr }) => {
  return (
    <div className=" bg-recomend-gradient pb-5 mb-16 md:mb-[108px]">
      <div className="layout ">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className=" text-xl md:text-5xl font-corsa">
            {textTr.recommendTitle}
          </h1>
          <Image
            src={longSnake}
            alt="longSnake"
            className=" ml-auto mr-auto md:w-[617px]"
          />
        </div>
        <div className="lg:flex items-center justify-between">
          <div className="sm:hidden lg:block">
            <div className=" w-[427px] h-[812px] bg-[#FEFEFE] mr-20 rounded-2xl shadow-card-shadow"></div>
          </div>

          <ul>
            <li className="flex mb-8 md:mb-12">
              <Image
                src={circle}
                alt="small-circle"
                width={24}
                height={24}
                className="mr-6 md:w-[39px] md:h-[41px]"
              />
              <div>
                <p className="font-poiret md:text-3xl">{textTr.recommend1}</p>
              </div>
            </li>
            <li className="flex mb-8 md:mb-12">
              <Image
                src={circle}
                alt="small-circle"
                width={24}
                height={24}
                className="mr-6 md:w-[39px] md:h-[41px]"
              />
              <div>
                <p className=" font-poiret md:text-3xl">{textTr.recommend2}</p>
              </div>
            </li>
            <li className="flex mb-8 md:mb-12">
              <Image
                src={circle}
                alt="small-circle"
                width={24}
                height={24}
                className="mr-6 md:w-[39px] md:h-[41px]"
              />
              <div>
                <p className=" font-poiret md:text-3xl">{textTr.recommend3}</p>
              </div>
            </li>
            <li className="flex mb-8 md:mb-12">
              <Image
                src={circle}
                alt="small-circle"
                width={24}
                height={24}
                className="mr-6 md:w-[39px] md:h-[41px]"
              />
              <div>
                <p className=" font-poiret md:text-3xl">{textTr.recommend4}</p>
              </div>
            </li>
            <li className="flex mb-8 md:mb-12">
              <Image
                src={circle}
                alt="small-circle"
                width={24}
                height={24}
                className="mr-6 md:w-[39px] md:h-[41px]"
              />
              <div>
                <p className=" font-poiret md:text-3xl">{textTr.recommend5}</p>
              </div>
            </li>
            <li className="flex">
              <Image
                src={circle}
                alt="small-circle"
                width={24}
                height={24}
                className="mr-6 md:w-[39px] md:h-[41px]"
              />
              <div>
                <p className=" font-poiret md:text-3xl">{textTr.recommend6}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

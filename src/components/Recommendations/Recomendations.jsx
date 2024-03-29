import Image from "next/image";
import React from "react";
import circle from "../../../public/icons/circle.svg";
import longSnake from "../../../public/icons/long-snake.svg";

export const Recommendations = ({ textTr }) => {
  return (
    <div className="layout mb-16">
      <div className="mb-8 text-center">
        <h1 className=" text-xl font-corsa">{textTr.recommendTitle}</h1>
        <Image src={longSnake} alt="longSnake" className=" ml-auto mr-auto" />
      </div>
      <ul>
        <li className="flex mb-8">
          <Image
            src={circle}
            alt="small-circle"
            width={24}
            height={24}
            className="mr-6"
          />
          <div>
            <p className="font-poiret">{textTr.recommend1}</p>
          </div>
        </li>
        <li className="flex mb-8">
          <Image
            src={circle}
            alt="small-circle"
            width={24}
            height={24}
            className="mr-6"
          />
          <div>
            <p className=" font-poiret">{textTr.recommend2}</p>
          </div>
        </li>
        <li className="flex mb-8">
          <Image
            src={circle}
            alt="small-circle"
            width={24}
            height={24}
            className="mr-6"
          />
          <div>
            <p className=" font-poiret">{textTr.recommend3}</p>
          </div>
        </li>
        <li className="flex mb-8">
          <Image
            src={circle}
            alt="small-circle"
            width={24}
            height={24}
            className="mr-6"
          />
          <div>
            <p className=" font-poiret">{textTr.recommend4}</p>
          </div>
        </li>
        <li className="flex mb-8">
          <Image
            src={circle}
            alt="small-circle"
            width={24}
            height={24}
            className="mr-6"
          />
          <div>
            <p className=" font-poiret">{textTr.recommend5}</p>
          </div>
        </li>
        <li className="flex">
          <Image
            src={circle}
            alt="small-circle"
            width={24}
            height={24}
            className="mr-6"
          />
          <div>
            <p className=" font-poiret">{textTr.recommend6}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

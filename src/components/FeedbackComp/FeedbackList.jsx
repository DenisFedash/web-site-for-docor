"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import brackets from "../../../public/icons/backets.svg";
import waves from "../../../public/icons/snake.svg";
import person from "../../../public/icons/person.svg";
import { FeedbackBreakpoints, Slider } from "./Slider/Slider";

export const FeedbackList = ({ textTr }) => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6287a903e9494df61b3d821b.mockapi.io/feedback"
        );

        const modifiedFeedback = response.data.map((entry) => ({
          ...entry,
          createdAt: new Date(entry.createdAt),
        }));
        setFeedback(modifiedFeedback);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="layout mb-20 relative">
      <div className="mb-11">
        <h2 className=" text-xl md:text-3xl font-corsa text-center">
          {textTr.feedbackTitle}
        </h2>
        <Image
          src={waves}
          alt="waves"
          width={163}
          height={11}
          className="mr-auto ml-auto md:w-[220px]"
        />
      </div>
      <Slider
        breakpoints={FeedbackBreakpoints}
        sessionStorageKey="OurGamesSlider"
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          feedback.map((entry, index) => (
            <div key={index} className="keen-slider__slide">
              <div
                className={`${
                  !feedback.isActive ? "pointer-events-none opacity-50" : ""
                }`}
              >
                <div className=" bg-[#FFF7D2] rounded-3xl shadow-card-shadow p-[22px] md:w-[253px] md:ml-auto md:mr-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div className="border-b-2 border-dashed border-[#A68D6E] w-[106px]"></div>
                    <Image src={brackets} alt="brackets" />
                    <div className="border-b-2 border-dashed border-[#A68D6E] w-[106px]"></div>
                  </div>

                  <div className="flex items-center mb-3.5">
                    <Image src={person} alt="person" />
                    <h3 className="text-xl font-corsa">{entry.name}</h3>
                  </div>
                  <p className=" font-poiret mb-20">{entry.message}</p>
                  <p className=" font-corsa mb-14">
                    {formatDate(entry.createdAt)}
                  </p>
                  <div className="border-b-2 border-dashed border-[#A68D6E]"></div>
                </div>
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};

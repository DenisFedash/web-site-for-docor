"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import brackets from "../../../public/icons/backets.svg";
import waves from "../../../public/icons/snake.svg";
import person from "../../../public/icons/person.svg";
import iconRight from "../../../public/icons/icon-right.svg";
import iconLeft from "../../../public/icons/icon-left.svg";

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

  const sortedFeedbacks = feedback.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="layout mb-20 ">
      <div className="mb-11">
        <h2 className="text-xl md:text-3xl font-corsa text-center">
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
      <div className="container-box p-12">
        <Swiper
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            sortedFeedbacks.reverse().map((entry, index) => (
              <SwiperSlide key={index}>
                <div>
                  <div className="bg-[#FFF7D2] rounded-3xl shadow-card-shadow lg:shadow-none p-[22px] md:w-[253px] lg:w-[374px] md:ml-auto md:mr-auto">
                    <div className="flex items-center justify-between mb-6">
                      <div className="border-b-2 border-dashed border-[#A68D6E] w-[106px]"></div>
                      <Image src={brackets} alt="brackets" />
                      <div className="border-b-2 border-dashed border-[#A68D6E] w-[106px]"></div>
                    </div>

                    <div className="flex items-center mb-3.5">
                      <Image src={person} alt="person" />
                      <h3 className="text-xl font-corsa">{entry.name}</h3>
                    </div>
                    <p className="font-poiret mb-20">{entry.message}</p>
                    <p className="font-corsa mb-14">
                      {formatDate(entry.createdAt)}
                    </p>
                    <div className="border-b-2 border-dashed border-[#A68D6E]"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>

        <button className="text-gray-500 hover:text-gray-700 arrow-left arrow z-10 hover:bg-btn-active py-2.5 px-4 rounded-lg">
          <Image src={iconLeft} alt="icon-left" />
        </button>
        <button className="text-gray-500 hover:text-gray-700 arrow-right arrow z-10 hover:bg-btn-active py-2.5 px-4 rounded-lg">
          <Image src={iconRight} alt="icon-right" />
        </button>
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
};

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import brackets from "../../../public/icons/backets.svg";
import waves from "../../../public/icons/snake.svg";
import person from "../../../public/icons/person.svg";

export const FeedbackList = ({ textTr }) => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Запрос данных к указанному API эндпоинту
        const response = await axios.get(
          "https://6287a903e9494df61b3d821b.mockapi.io/feedback"
        );
        // Модификация объектов данных, добавление даты создания
        const modifiedFeedback = response.data.map((entry) => ({
          ...entry,
          createdAt: new Date(entry.createdAt),
        }));
        setFeedback(modifiedFeedback); // Установка модифицированных данных
        setLoading(false); // Установка флага загрузки в false
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Вызов функции получения данных при монтировании компонента
  }, []);

  // Функция для форматирования даты в нужном формате
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="layout mb-20">
      <div className="mb-11">
        <h2 className=" text-xl font-corsa text-center">
          {textTr.feedbackTitle}
        </h2>
        <Image
          src={waves}
          alt="waves"
          width={163}
          height={11}
          className="mr-auto ml-auto"
        />
      </div>
      {loading ? (
        <p>Loading...</p> // Отображение сообщения о загрузке, пока данные загружаются
      ) : (
        feedback.map((entry, index) => (
          <div
            key={index}
            className=" bg-[#FFF7D2] rounded-3xl shadow-card-shadow p-[22px]"
          >
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
            <p className=" font-corsa mb-14">{formatDate(entry.createdAt)}</p>
            <div className="border-b-2 border-dashed border-[#A68D6E]"></div>
          </div>
        ))
      )}
    </div>
  );
};

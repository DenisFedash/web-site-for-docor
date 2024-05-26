"use client";

import { useState } from "react";
import axios from "axios";

export const FeedbackForm = ({ textTr }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, message };

    try {
      // Отправляем данные на указанный API эндпоинт
      await axios.post(
        "https://6287a903e9494df61b3d821b.mockapi.io/feedback",
        formData
      );
      // Очищаем поля формы
      setName("");
      setMessage("");
      setError(null); // Сбрасываем ошибку, если была
    } catch (error) {
      console.error("Error saving data:", error);
      setError("Failed to submit feedback. Please try again later."); // Устанавливаем сообщение об ошибке
    }
  };

  return (
    <div className="layout py-6 mb-20">
      <h2 className="text-xl md:text-3xl md:text-center font-poiret mb-8 md:mb-14">
        {textTr.feedbackFormTitle}
      </h2>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-8">
          <label className=" font-poiret mb-2.5 md:text-3xl">
            {textTr.feedbackFormName}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[#DADADA] rounded-xl p-2.5 md:text-3xl"
          />
        </div>
        <div className="mb-8">
          <label className=" font-poiret mb-2.5 md:text-3xl">
            {textTr.feedbackFormMessage}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            minLength="10"
            maxLength="300"
            className="w-full border border-[#DADADA] rounded-xl p-2.5 h-[224px] md:text-3xl"
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className=" font-poiret bg-btn-bg py-5 rounded-full w-full hover:bg-btn-active md:text-3xl"
        >
          {textTr.feedbackFormBtn}
        </button>
      </form>
    </div>
  );
};

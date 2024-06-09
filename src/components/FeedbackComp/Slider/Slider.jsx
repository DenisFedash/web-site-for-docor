"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

export const FeedbackBreakpoints = {
  "(min-width: 768px)": {
    slides: { perView: 2, spacing: 48 },
    initial: 0,
  },
  "(min-width: 1440px)": {
    slides: { perView: 3, spacing: 48 },
    initial: 0,
  },
};

export const Slider = ({ children, breakpoints, sessionStorageKey }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: breakpoints,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);
    },
    loop: true,
  });

  useEffect(() => {
    if (sessionStorage) {
      const storedSlideIndex = sessionStorage.getItem(sessionStorageKey);
      if (storedSlideIndex) {
        instanceRef.current.moveToIdx(parseInt(storedSlideIndex));
      }
    }
  }, [instanceRef, sessionStorageKey]);

  useEffect(() => {
    if (sessionStorage) {
      sessionStorage.setItem(sessionStorageKey, currentSlide.toString());
    }
    console.log(`Збережено поточний індекс слайду: ${currentSlide}`);
  }, [currentSlide, sessionStorageKey]);

  return (
    <>
      <div className="mb-4 md:mb-8 lg:mb-14 keen-slider" ref={sliderRef}>
        {children}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mb-5 md:mb-8">
          {[
            ...Array(instanceRef.current.track.details?.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

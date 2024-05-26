"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
      setCurrentSlide(slider.details().relativeSlide);
    },
    created(slider) {
      setLoaded(true);
    },
    loop: true,
  });

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  useEffect(() => {
    if (loaded && instanceRef.current && sessionStorage) {
      const storedSlideIndex = sessionStorage.getItem(sessionStorageKey);
      if (storedSlideIndex) {
        instanceRef.current.moveToIdx(parseInt(storedSlideIndex));
      }
    }
  }, [loaded, sessionStorageKey, instanceRef]);

  return (
    <>
      <div className="mb-4 md:mb-8 lg:mb-14 keen-slider" ref={sliderRef}>
        {children}
      </div>
      {loaded && instanceRef.current && (
        <>
          <div className="hidden lg:block">
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 focus:outline-none transition-transform duration-200 ease-in-out active:scale-90"
              onClick={handlePrevClick}
            >
              left
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none transition-transform duration-200 ease-in-out active:scale-90"
              onClick={handleNextClick}
            >
              right
            </button>
          </div>
          <div className="dots mb-5 md:mb-8">
            {[...Array(instanceRef.current.track.size).keys()].map((idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => {
                    instanceRef.current.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

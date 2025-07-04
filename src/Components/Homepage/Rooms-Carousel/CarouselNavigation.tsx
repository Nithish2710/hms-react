"use client";
import React from "react";

interface CarouselNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export function CarouselNavigation({
  onPrevClick,
  onNextClick,
}: CarouselNavigationProps) {
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  return (
    <>
      <button
        className="flex absolute top-2/4 z-20 justify-center items-center rounded-full border border-solid transition-all -translate-y-2/4 cursor-pointer backdrop-blur-[10px] bg-white bg-opacity-10 border-white border-opacity-20 duration-[0.3s] ease-[ease] h-[60px] left-[30px] text-white w-[60px] hover:bg-opacity-20"
        aria-label="Previous room"
        onClick={onPrevClick}
        onKeyDown={(event) => handleKeyDown(event, onPrevClick)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button
        className="flex absolute top-2/4 z-20 justify-center items-center rounded-full border border-solid transition-all -translate-y-2/4 cursor-pointer backdrop-blur-[10px] bg-white bg-opacity-10 border-white border-opacity-20 duration-[0.3s] ease-[ease] h-[60px] right-[30px] text-white w-[60px] hover:bg-opacity-20"
        aria-label="Next room"
        onClick={onNextClick}
        onKeyDown={(event) => handleKeyDown(event, onNextClick)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </>
  );
}

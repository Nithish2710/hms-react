"use client";
import React from "react";
import { Room } from "./HotelCarousel";

interface CarouselIndicatorsProps {
  rooms: Room[];
  currentImageIndex: number;
  onIndicatorClick: (index: number) => void;
}

export function CarouselIndicators({
  rooms,
  currentImageIndex,
  onIndicatorClick,
}: CarouselIndicatorsProps) {
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  return (
    <div className="flex absolute left-2/4 z-20 gap-3 -translate-x-2/4 bottom-[30px]">
      {rooms.map((_, index) => (
        <button
          className="w-3 h-3 rounded-full border-2 border-solid transition-all cursor-pointer border-white border-opacity-50 duration-[0.3s] ease-[ease] hover:border-opacity-75"
          key={index}
          aria-label={`Go to room ${index + 1}`}
          onClick={() => onIndicatorClick(index)}
          onKeyDown={(event) =>
            handleKeyDown(event, () => onIndicatorClick(index))
          }
          style={{
            backgroundColor:
              index === currentImageIndex ? "#d4af37" : "transparent",
          }}
        />
      ))}
    </div>
  );
}

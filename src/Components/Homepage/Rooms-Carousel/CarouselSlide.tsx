"use client";
import React from "react";
import { Room } from "./HotelCarousel";
import { RoomCard } from "./RoomCard";

interface CarouselSlideProps {
  room: Room;
  index: number;
  currentImageIndex: number;
  onRoomClick: (room: Room) => void;
}

export function CarouselSlide({
  room,
  index,
  currentImageIndex,
  onRoomClick,
}: CarouselSlideProps) {
  const isActive = index === currentImageIndex;

  return (
    <div
      className="flex relative items-end min-w-full h-full bg-center bg-cover cursor-pointer"
      onClick={() => onRoomClick(room)}
      style={{
        backgroundImage: `url(${room.image})`,
      }}
    >
      <div
        className="absolute inset-0 transition-all duration-[0.3s] ease-[ease]"
        style={{
          background: isActive
            ? "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%)"
            : "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%)",
        }}
      />

      <RoomCard room={room} isActive={isActive} />
    </div>
  );
}

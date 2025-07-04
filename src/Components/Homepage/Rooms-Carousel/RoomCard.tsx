"use client";
import React from "react";
import { Room } from "./HotelCarousel";

interface RoomCardProps {
  room: Room;
  isActive: boolean;
}

export function RoomCard({ room, isActive }: RoomCardProps) {
  return (
    <div
      className="relative z-10 p-16 w-full opacity-90 transition-all ease-in-out translate-y-5 duration-[0.4s] text-white"
      style={{
        transform: isActive ? "translateY(0)" : "translateY(20px)",
        opacity: isActive ? 1 : 0.9,
      }}
    >
      <h2 className="mb-5 text-6xl font-light tracking-normal leading-none max-sm:text-4xl">
        {room.name}
      </h2>

      <div className="flex gap-8 items-center mb-5 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
        <div className="flex gap-2 items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
          </svg>
          <span className="text-lg opacity-90">{room.size}</span>
        </div>

        <div className="flex gap-2 items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3 4v2h2l2.54-3.4L16.5 18H20z" />
          </svg>
          <span className="text-lg opacity-90">{room.guests}</span>
        </div>
      </div>

      <div className="text-5xl text-amber-400 max-sm:text-4xl">
        {room.price}$
      </div>
    </div>
  );
}

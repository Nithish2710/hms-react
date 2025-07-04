"use client";
import React from "react";
import { Room } from "./HotelCarousel";

interface BookingModalProps {
  isOpen: boolean;
  selectedRoom: Room | null;
  onClose: () => void;
}

export function BookingModal({
  isOpen,
  selectedRoom,
  onClose,
}: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="flex fixed inset-0 z-50 justify-center items-center p-5 bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="relative p-10 w-full rounded-3xl shadow-2xl bg-white max-w-[500px]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="absolute top-5 right-5 text-2xl bg-transparent cursor-pointer border-none text-stone-500 hover:text-stone-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <h3 id="modal-title" className="mb-5 text-3xl text-neutral-900">
          {selectedRoom?.name}
        </h3>

        <p className="mb-5 text-2xl text-amber-400">
          ${selectedRoom?.price} / night
        </p>

        <div className="mb-8">
          <h4 className="mb-2.5 text-xl text-neutral-900">Features:</h4>
          <ul className="p-0 list-none">
            {selectedRoom?.features?.map((feature, index) => (
              <li key={index} className="py-1.5 text-gray-600">
                • {feature}
              </li>
            )) || []}
          </ul>
        </div>

        <button className="px-8 py-4 w-full text-lg bg-[] rounded-lg transition-all cursor-pointer border-none duration-[0.3s] ease-[ease] text-white hover:bg-amber-500">
          Book Now
        </button>
      </div>
    </div>
  );
}

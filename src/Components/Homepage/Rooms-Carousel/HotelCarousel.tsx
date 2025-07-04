"use client";
import { useState } from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselNavigation } from "./CarouselNavigation";
import { CarouselIndicators } from "./CarouselIndicators";
import { BookingModal } from "./BookingModal";

export interface Room {
  id: number;
  name: string;
  price: number;
  size: string;
  guests: string;
  image: string;
  features: string[];
}

export default function HotelCarousel() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [rooms] = useState<Room[]>([
    {
      id: 1,
      name: "The Ritz-Carlton",
      price: 100,
      size: "35 sqm",
      guests: "2 Person",
      image:
        "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg",
      features: ["King Size Bed", "City View", "Mini Bar", "Free WiFi"],
    },
    {
      id: 2,
      name: "Four Seasons Hotels",
      price: 130,
      size: "35 sqm",
      guests: "2 Person",
      image:
        "https://images.pexels.com/photos/6394651/pexels-photo-6394651.jpeg",
      features: ["Queen Size Bed", "Garden View", "Work Desk", "Room Service"],
    },
    {
      id: 3,
      name: "Waldorf Astoria Hotels",
      price: 120,
      size: "35 sqm",
      guests: "2 Person",
      image:
        "https://images.pexels.com/photos/6603475/pexels-photo-6603475.jpeg",
      features: [
        "Double Bed",
        "Mountain View",
        "Balcony",
        "Breakfast Included",
      ],
    },
    {
      id: 4,
      name: "Timberline Hideaway Hotel",
      price: 150,
      size: "35 sqm",
      guests: "2 Person",
      image:
        "https://images.pexels.com/photos/7903172/pexels-photo-7903172.jpeg",
      features: ["Twin Beds", "Ocean View", "Private Terrace", "Spa Access"],
    },
  ]);

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? rooms.length - 1 : currentImageIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openBookingModal = (room: Room) => {
    setSelectedRoom(room);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <div className="px-5 py-10 min-h-screen bg-neutral-900">
      <div className="overflow-hidden relative mx-auto my-0 rounded-3xl shadow-2xl h-[600px] max-w-[1400px]">
        <div
          className="flex relative transition-transform ease-in-out duration-[0.6s] size-full"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {rooms.map((room, index) => (
            <CarouselSlide
              key={room.id}
              room={room}
              index={index}
              currentImageIndex={currentImageIndex}
              onRoomClick={openBookingModal}
            />
          ))}
        </div>

        <CarouselNavigation onPrevClick={prevSlide} onNextClick={nextSlide} />

        <CarouselIndicators
          rooms={rooms}
          currentImageIndex={currentImageIndex}
          onIndicatorClick={goToSlide}
        />
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        selectedRoom={selectedRoom}
        onClose={closeBookingModal}
      />
    </div>
  );
}

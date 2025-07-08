"use client";
import { useState } from "react";
import { HotelHeader } from "./HotelHeader";
import { ImageGallery } from "./ImageGallery";
import { PropertyDetails } from "./PropertyDetails";
import { BookingForm } from "./BookingForm";

export function HotelBooking() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  // https://drive.google.com/file/d/1jvWSxBLpTcQx10KaPCflnRqlMKRu-uyV/view?usp=drive_link
  const images = [
    "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg",
    "https://images.pexels.com/photos/29074494/pexels-photo-29074494.jpeg",
    "https://images.pexels.com/photos/8134787/pexels-photo-8134787.jpeg",
    "https://images.pexels.com/photos/6603475/pexels-photo-6603475.jpeg",
    "https://images.pexels.com/photos/16120131/pexels-photo-16120131.jpeg",
  ];

  return (
    <>
    <div className="p-6 min-h-screen bg-white">
      <main className="overflow-hidden mx-auto my-0 rounded-2xl bg-white max-w-[1200px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        
        <HotelHeader />
        <ImageGallery images={images} selectedImageIndex={selectedImageIndex} />
        <div className="grid gap-12 p-8 grid-cols-[2fr_1fr] max-md:gap-8 max-md:grid-cols-[1fr]">
          <PropertyDetails />
          <BookingForm
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
            guests={guests}
            setGuests={setGuests}
          />
        </div>

      </main>
    </div>

    </>
  );
}

export default HotelBooking;

"use client";
import { useState } from "react";
import { HotelCard } from "./HotelCard";
import acrooms from "../../../assets/ac-rooms.jpg";
import hallImage from "../../../assets/hall.jpg";
import diningImage from "../../../assets/dining.jpg";

interface Hotel {
  image: string;
  title: string;
  location: string;
  price?: string;
  rating: string;
  badge?: string | null;
}

export function FeaturedDestinations() {
  const [hotels] = useState<Hotel[]>(() => [
    {
      image: acrooms,
      title: "Premium AC Rooms",
      location: "Cool Stylish and made for Pure Relaxation",
      price: "399",
      rating: "4.5",
      // badge: "Best Seller",
    },
    {
      image: hallImage,
      title: "Party Hall",
      location: "Spacious Elegant and made for Pure Fun",
      price: "299",
      rating: "4.5",
      // badge: null,
    },
    {
      image: diningImage,
      title: "Dining",
      location: "Delicious flavours in every bite",
      price: "249",
      rating: "4.5",
      // badge: "Best Seller",
    },
    
  ]);

  return (
    <section className="px-0 py-10 bg-gray-50">
      <div className="px-6 py-0 mx-auto my-0 max-w-[1200px]">
        <div className="mb-16 text-center">
          <h2 className="mx-0 mt-0 mb-4 text-4xl font-bold text-neutral-900 max-sm:text-4xl">
          What We Offer
          </h2>
          <p className="mx-auto my-0 text-lg leading-relaxed max-w-[600px] text-slate-600">
            Unwind in our premium AC rooms, celebrate life’s moments in our elegant party hall, and enjoy a dining experience to remember.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {hotels.map((hotel, index) => (
            <HotelCard
              key={index}
              image={hotel.image}
              title={hotel.title}
              location={hotel.location}
              //price={hotel.price}
              rating={hotel.rating}
              badge={hotel.badge}
            />
          ))}
        </div>
     
      </div>
    </section>
  );
}

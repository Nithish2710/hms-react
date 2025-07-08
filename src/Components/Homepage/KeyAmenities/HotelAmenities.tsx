"use client";
import * as React from "react";
import { AmenityCard } from "./AmenityCard";

export const HotelAmenities: React.FC = () => {
  const amenities = [
    {
      iconType: "wifi" as const,
      title: "Free High-Speed Wi-Fi",
    },
    {
      iconType: "document" as const,
      title: "Spacious Party Hall for Events & Celebrations",
    },
    {
      iconType: "gym" as const,
      title: "In-House Dining - Breakfast, Lunch & Dinner",
    },
    {
      iconType: "eye" as const,
      title: "Air-Conditioned Double & Triple Bed Rooms",
    },
    {
      iconType: "shuttle" as const,
      title: "Secure Parking",
    },
    {
      iconType: "book" as const,
      title: "Comfortable Furnishings & Clean Interiors",
    },
    {
      iconType: "car" as const,
      title: "Multi Cuisine Dining",
    },
     {
      iconType: "tv" as const,
      title: "Stay Entertained with Smart TV's",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-10 px-5 -pb-20">
      <div className="max-w-6xl mx-auto text-center">
        <header className="mb-15">
          <p className="text-[#54af74] text-base font-medium tracking-widest uppercase mb-4 italic">
            Hotel Features
          </p>
          <p className="text-slate-700 text-2xl sm:text-3xl font-bold tracking-tight mb-0">
            KEY AMENITIES
          </p>
          <div className="w-20 h-1 bg-green-700 mx-auto mt-5" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 sm:gap-8">
          {amenities.map((amenity, index) => (
            <AmenityCard
              key={index}
              iconType={amenity.iconType}
              title={amenity.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelAmenities;

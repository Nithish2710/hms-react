"use client";
import { useState } from "react";
import { HotelCard } from "./HotelCard";

interface Hotel {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: string;
  badge?: string | null;
}

export function FeaturedDestinations() {
  const [hotels] = useState<Hotel[]>(() => [
    {
      image:
        "https://images.pexels.com/photos/6394651/pexels-photo-6394651.jpeg",
      title: "Urbanza Suites",
      location: "Main Road 123 Street, 23 Colony",
      price: "399",
      rating: "4.5",
      badge: "Best Seller",
    },
    {
      image:
        "https://images.pexels.com/photos/6207821/pexels-photo-6207821.jpeg",
      title: "Urbanza Suites",
      location: "Main Road 123 Street, 23 Colony",
      price: "299",
      rating: "4.5",
      badge: null,
    },
    {
      image:
        "https://images.pexels.com/photos/7609139/pexels-photo-7609139.jpeg",
      title: "Urbanza Suites",
      location: "Main Road 123 Street, 23 Colony",
      price: "249",
      rating: "4.5",
      badge: "Best Seller",
    },
    {
      image:
        "https://images.pexels.com/photos/6603475/pexels-photo-6603475.jpeg",
      title: "Urbanza Suites",
      location: "Main Road 123 Street, 23 Colony",
      price: "199",
      rating: "4.5",
      badge: null,
    },
  ]);

  return (
    <section className="px-0 py-20 bg-gray-50">
      <div className="px-6 py-0 mx-auto my-0 max-w-[1200px]">
        <div className="mb-16 text-center">
          <h2 className="mx-0 mt-0 mb-4 text-3xl font-bold text-neutral-900 max-sm:text-4xl">
            Featured Destination
          </h2>
          <p className="mx-auto my-0 text-md leading-relaxed max-w-[600px] text-slate-600">
            Discover our handpicked selection of exceptional properties around
            the world, offering unparalleled luxury and unforgettable
            experiences.
          </p>
        </div>
        <div className="grid gap-8 mb-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {hotels.map((hotel, index) => (
            <HotelCard
              key={index}
              image={hotel.image}
              title={hotel.title}
              location={hotel.location}
              price={hotel.price}
              rating={hotel.rating}
              badge={hotel.badge}
            />
          ))}
        </div>
     
      </div>
    </section>
  );
}

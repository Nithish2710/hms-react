"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface HotelCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: string;
  badge?: string | null;
}

export function HotelCard({ image, title, location, price, rating, badge }: HotelCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl cursor-pointer bg-white shadow-md">
      <div className="overflow-hidden relative h-60">
      <Link to="/hotel-booking" >
  <img
    className="object-cover w-full h-full"
    src={image}
    alt={title}
  />
</Link>
        {badge && (
          <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-yellow-400 rounded-3xl text-neutral-900">
            {badge}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <h3 className="text-lg font-semibold text-neutral-900 flex-1">{title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-medium text-zinc-700">{rating}</span>
          </div>
        </div>
        <div className="flex gap-1 items-center mb-4 text-sm text-slate-600">
          📍 {location}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-neutral-900">${price}</span>
            <span className="ml-1 text-sm text-slate-600">/night</span>
          </div>
          <button className="px-5 py-2.5 text-sm font-medium bg-sky-600 text-white rounded-lg">Book Now</button>
        </div>
      </div>
    </article>
  );
}

export default function HotelCardCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    created: () => setLoaded(true),
  });

  const [loaded, setLoaded] = useState(false);
const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (instanceRef.current) {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [instanceRef]);

  const hotels: HotelCardProps[] = [
    {
      image: "https://drive.google.com/file/d/1jvWSxBLpTcQx10KaPCflnRqlMKRu-uyV/view?usp=drive_link",
      title: "Urbanza Suites",
      location: "Main Road 123 Street, 23 Colony",
      price: "399",
      rating: "4.5",
      badge: "Best Seller",
    },
    {
      image: "https://drive.google.com/file/d/1oPSQ1DapyfJyCbKvvhhxZAoL8alY4NQF/view?usp=drive_link",
      title: "Urbanza Suites",
      location: "Main Road 123 Street, 23 Colony",
      price: "299",
      rating: "4.5",
      badge: null,
    },
    {
      image: "https://drive.google.com/file/d/1hXIlJqN8BzFbtxfzLg4gUM1YebbKVl-6/view?usp=drive_link",
      title: "Urbanza Suites",
      location: "Main Road 123 Street, 23 Colony",
      price: "249",
      rating: "4.5",
      badge: "Best Seller",
    },
    {
      image:"https://drive.google.com/file/d/1hS-U4PkUyTfgBSxZXVuIL4mxq7HHTin-/view?usp=drive_link",
      title: "Urbanza Suites",
      location: "Main Road 123 Street, 23 Colony",
      price: "199",
      rating: "4.5",
      badge: null,
    },
  ];

  return (
    <section className="px-0 py-20 bg-gray-50">
      <div className="px-6 mx-auto max-w-[1200px]">
 

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {hotels.map((hotel, index) => (
              <div key={index} className="keen-slider__slide">
                <HotelCard {...hotel} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

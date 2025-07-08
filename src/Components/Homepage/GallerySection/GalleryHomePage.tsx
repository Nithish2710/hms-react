"use client";
import { useState } from "react";

export default function HotelBooking() {

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(selectedImageIndex);

  const images = [
    "https://c4.wallpaperflare.com/wallpaper/721/832/884/5-star-hotel-room-wallpaper-preview.jpg",
    "https://img.freepik.com/premium-photo/clean-tidy-hotel-rooms_149197-84.jpg?w=740",
    "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    "https://c4.wallpaperflare.com/wallpaper/350/913/211/hotel-room-wallpaper-preview.jpg",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
  ];

  return (
   <section className="p-8 border-b border-solid border-b-gray-200">
    <h3 className="text-slate-700 text-2xl sm:text-3xl font-bold tracking-tight mb-0 text-center">GALLERY</h3>
    <div className="w-15 h-1 bg-green-700 mx-auto mt-3 mb-10"/>
      <div className="grid gap-4 grid-cols-[2fr_1fr_1fr] grid-rows-[300px_300px] max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[repeat(3,250px)] max-sm:grid-cols-[1fr] max-sm:grid-rows-[repeat(5,200px)]">
        
        {/* Big Preview Image */}
        <div className="row-[span_2] max-md:row-[span_1]">
          <img
            className="object-cover overflow-hidden rounded-xl transition-transform cursor-pointer aspect-square duration-[0.3s] ease-[ease] size-full"
            src={images[selectedIndex]}
            alt="Main hotel room view"
          />
        </div>

        {/* Thumbnail images */}
        {images.slice(1).map((image, index) => {
          const actualIndex = index + 1;
          return (
            <div className="relative" key={actualIndex} onClick={() => setSelectedIndex(actualIndex)}>
             <img
  className="object-cover overflow-hidden rounded-xl transition-transform duration-300 ease-in-out cursor-pointer aspect-square size-full hover:shadow-lg hover:scale-105 shadow-xl"
  src={image}
  alt={`Hotel view ${actualIndex + 1}`}
/>

              {index === 4 && (
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold rounded-xl cursor-pointer bg-opacity-60 text-white shadow-2xl">
                  
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

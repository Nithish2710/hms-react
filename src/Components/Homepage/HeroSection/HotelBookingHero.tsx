"use client";
import * as React from "react";
import { HeroContent } from "./HeroContent";
import { SearchForm } from "./SearchForm";
import bgImage from "../../../assets/banner-new.jpg"; 

interface SearchFormData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export const HotelBookingHero: React.FC = () => {
  const handleSearch = (data: SearchFormData) => {
    console.log("Searching for:", data);
  };

  return (
    <>
    <div className="relative w-full">
<main
  className="relative flex justify-center items-center min-h-screen bg-center bg-no-repeat bg-cover"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content above overlay */}
  <div className="relative z-10 px-6 w-full max-w-[1200px]">
    <HeroContent />
  </div>

</main>
<div className="absolute inset-0 flex items-center mt-150">
      <SearchForm onSearch={handleSearch} />
</div>
</div>
</>
  );
};

export default HotelBookingHero;
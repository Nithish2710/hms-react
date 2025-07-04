"use client";
import { HotelBookingHero } from "./HeroSection/HotelBookingHero";
import { FeaturedDestinations } from "./Homepage-Carousel/FeaturedDestinations";
import { AboutSection } from "./Welcome-Section/WelcomeSecion";
import {HotelAmenities} from "./KeyAmenities/HotelAmenities";
import ImageCarousel from "./ImageCarousel/ImageCarousel";

export default function HotelBookingPage() {
  return (
    <div>
      <HotelBookingHero />
      <AboutSection/>
      <FeaturedDestinations />
      <HotelAmenities/>
      <ImageCarousel/>
    </div>
  );
}

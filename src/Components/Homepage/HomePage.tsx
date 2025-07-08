"use client";
import { HotelBookingHero } from "./HeroSection/HotelBookingHero";
import { FeaturedDestinations } from "./Homepage-Carousel/FeaturedDestinations";
import { AboutSection } from "./Welcome-Section/WelcomeSecion";
import {HotelAmenities} from "./KeyAmenities/HotelAmenities";
import ImageGallery from "./GallerySection/GalleryHomePage";
import VideoSection from "./VideoSection/VideoSection";

const images = [
    "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg",
    "https://images.pexels.com/photos/29074494/pexels-photo-29074494.jpeg",
    "https://images.pexels.com/photos/8134787/pexels-photo-8134787.jpeg",
    "https://images.pexels.com/photos/6603475/pexels-photo-6603475.jpeg",
    "https://images.pexels.com/photos/16120131/pexels-photo-16120131.jpeg",
  ];


export default function HotelBookingPage() {
  return (
    <div>
      <HotelBookingHero />
      <AboutSection/>
      <FeaturedDestinations />
      <VideoSection/>
      <HotelAmenities/>
      <ImageGallery/>
    </div>
  );
}

"use client";
import bgImage from "../../../assets/banner-hotel.jpg"; 

function GalleryBanner() {
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
          <div className="relative z-10 px-6 w-full max-w-[1200px] text-white text-center">
            <h3 className="text-7xl font-bold">Gallery</h3><br/>
            <h2 className="text-xl">Step Inside Through Our Gallery</h2>
            <h2 className="text-xl">Preview the warmth, elegance, and hospitality</h2>
          </div>
        </main>
      </div>
    </>
  );
}

export default GalleryBanner;

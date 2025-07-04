import React from "react";

export const ImageGallery: React.FC = () => {
  return (
    <div className="relative max-md:order-2">
      <div className="overflow-hidden relative rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
        <img
          alt="Mountain landscape view from hotel"
          src="https://images.pexels.com/photos/32850470/pexels-photo-32850470.jpeg"
          className="object-cover overflow-hidden w-full h-[400px] max-sm:h-[300px]"
        />
      </div>
      <div className="grid absolute -bottom-10 -left-10 gap-4 grid-cols-[1fr_1fr] w-[280px] max-md:static max-md:mt-6 max-md:w-full max-md:max-w-[400px] max-sm:grid-cols-[1fr] max-sm:w-[200px]">
        <div className="overflow-hidden rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
          <img
            alt="Forest path near hotel"
            src="https://images.pexels.com/photos/32852521/pexels-photo-32852521.jpeg"
            className="object-cover overflow-hidden w-full h-[120px]"
          />
        </div>
        <div className="overflow-hidden rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
          <img
            alt="Winter mountain hiking"
            src="https://images.pexels.com/photos/9021404/pexels-photo-9021404.jpeg"
            className="object-cover overflow-hidden w-full h-[120px]"
          />
        </div>
      </div>
    </div>
  );
};

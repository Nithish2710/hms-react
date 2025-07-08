"use client";
import * as React from "react";
import leafLeft from '../../../assets/leaf-white-left.png';
import leafRight from '../../../assets/leaf-white-right.png';

export const HeroContent: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="mb-4 font-bold leading-none text-[clamp(3rem,5vw,5rem)] text-white">
        <span className="text-6xl flex justify-center items-center gap-4 pb-5">
          <img src={leafLeft} alt="Left leaf" className="w-20" />
          Stay in Comfort
          <img src={leafRight} alt="Right leaf" className="w-20" />
        </span>
        
        <span className="text-6xl mt-4">Surrounded by Nature's Serenity</span>
      </h1>

      <p className="mx-auto mt-0 mb-12 text-xl leading-relaxed max-w-[600px] text-white text-opacity-90">
        Escape the noise, embrace the calm — where every moment is designed for rest and renewal.
      </p>
    </header>
  );
};

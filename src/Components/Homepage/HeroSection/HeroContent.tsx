"use client";
import * as React from "react";

export const HeroContent: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="mb-6 font-bold leading-none text-[clamp(3rem,5vw,5rem)] text-white">
        <span className="text-6xl">Stay in Comfort</span>
        <br />
        <span className="text-6xl">Surrounded by Nature's Serenity</span>
      </h1>

      <p className="mx-auto mt-0 mb-12 text-xl leading-relaxed max-w-[600px] text-white text-opacity-90">
        Escape the noise, embrace the calm — where every moment is designed for rest and renewal.
      </p>
    </header>
  );
};

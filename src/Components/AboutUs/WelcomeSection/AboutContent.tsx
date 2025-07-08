import React from "react";
import { FeatureGrid } from "./FeatureGrid";

export const AboutContent: React.FC = () => {
  return (
    <div className="max-md:order-1 max-md:text-center">
      <header className="flex items-center mb-6 text-base font-medium text-[#54a746] max-md:justify-center">
      </header>
      <h1 className="mb-8 text-5xl font-bold leading-tight text-slate-700 max-md:text-4xl max-sm:text-3xl">
        Welcome To Hari Rams Hemhalayaah
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-gray-500 max-sm:text-base">
        Where tradition meets comfort in the heart of Pollachi. Whether you're here for business or leisure, our hotel offers a peaceful stay surrounded by nature’s charm.
      </p>    
      <FeatureGrid />
    </div>
  );
};

import React from "react";
import { ImageGallery } from "./ImageGallery";
import { AboutContent } from "./AboutContent";

export const AboutSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="px-6 py-20 mx-auto my-0 max-w-[1200px] max-md:px-5 max-md:py-16 max-sm:px-4 max-sm:py-10">
        <div className="grid gap-20 items-center grid-cols-[1fr_1fr] max-md:gap-16 max-md:grid-cols-[1fr]">
          <ImageGallery />
          <AboutContent />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
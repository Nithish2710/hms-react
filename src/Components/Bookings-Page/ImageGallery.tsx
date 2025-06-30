import * as React from "react";
import useState from "react";

interface ImageGalleryProps {
  images: string[];
  selectedImageIndex: number;
}

export function ImageGallery({
  
  images,
  selectedImageIndex,
}
: ImageGalleryProps) 
 {
  return (
    <section className="p-8 border-b border-solid border-b-gray-200">
      <div className="grid gap-4 grid-cols-[2fr_1fr_1fr] grid-rows-[300px_300px] max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[repeat(3,250px)] max-sm:grid-cols-[1fr] max-sm:grid-rows-[repeat(5,200px)]">
        <div className="row-[span_2] max-md:row-[span_1]">
          <img
            className="object-cover overflow-hidden rounded-xl transition-transform cursor-pointer aspect-square duration-[0.3s] ease-[ease] size-full"
            src={images[0]}
            alt="Main hotel room view"
          />
        </div>
        {images.slice(1).map((image, index) => (
          <div className="relative" key={index + 1}>
            <img
              className="object-cover overflow-hidden rounded-xl transition-transform cursor-pointer aspect-square duration-[0.3s] ease-[ease] size-full"
              src={image}
              alt={`Hotel view ${index + 2}`}
            />
            {index === 3 && (
              <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold rounded-xl cursor-pointer bg-black bg-opacity-60 text-white">
                +5 more
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

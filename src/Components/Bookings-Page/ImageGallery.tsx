import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  selectedImageIndex?: number; // Optional default value
}

export function ImageGallery({ images, selectedImageIndex = 0 }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(selectedImageIndex);

  return (
    <section className="p-8 border-b border-solid border-b-gray-200">
      <div className="grid gap-4 grid-cols-[2fr_1fr_1fr] grid-rows-[300px_300px] max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[repeat(3,250px)] max-sm:grid-cols-[1fr] max-sm:grid-rows-[repeat(5,200px)]">
        
        {/* Big Preview Image */}
        <div className="row-[span_2] max-md:row-[span_1]">
          <img
            className="object-cover overflow-hidden rounded-xl transition-transform cursor-pointer aspect-square duration-[0.3s] ease-[ease] size-full"
            src={images[selectedIndex]}
            alt="Main hotel room view"
          />
        </div>

        {/* Thumbnail images */}
        {images.slice(1).map((image, index) => {
          const actualIndex = index + 1;
          return (
            <div className="relative" key={actualIndex} onClick={() => setSelectedIndex(actualIndex)}>
              <img
                className="object-cover overflow-hidden rounded-xl transition-transform cursor-pointer aspect-square duration-[0.3s] ease-[ease] size-full"
                src={image}
                alt={`Hotel view ${actualIndex + 1}`}
              />
              {index === 3 && (
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold rounded-xl cursor-pointer bg-opacity-60 text-white">
                  
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

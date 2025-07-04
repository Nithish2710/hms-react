import React from "react";
import slider1 from "../../../assets/slider1.png";
import slider2 from "../../../assets/slider2.png";
import slider3 from "../../../assets/slider3.png";
import slider4 from "../../../assets/slider4.png";
import slider5 from "../../../assets/slider5.png";
import slider6 from "../../../assets/slider6.png";
import slider7 from "../../../assets/slider7.png";
import slider8 from "../../../assets/slider8.png";
import slider9 from "../../../assets/slider9.png";
import slider10 from "../../../assets/slider10.png";
import slider11 from "../../../assets/slider11.png";
import slider12 from "../../../assets/slider12.png";

const images = [
  slider1, slider2, slider3, slider4, slider5, slider6,
  slider7, slider8, slider9, slider10, slider11, slider12
];

function ImageCarousel() {
  return (
    <>
      {/* Inline animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <p className="text-slate-700 text-4xl mt-6 sm:text-4xl font-bold tracking-tight mb-0 max-w-6xl mx-auto text-center">
        Hari Rams Events Lounge
      </p>
      <br />

      <div className="overflow-hidden w-full border border-gray-300 shadow-lg rounded-lg">
        <div
          className="flex animate-scroll"
          style={{
            animation: "scroll 10s linear infinite",
            animationPlayState: "running",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {[...images, ...images].map((img, idx) => (
            <div
              key={idx}
              className="h-80 flex-shrink-0 overflow-hidden border-r"
            >
              <img
                src={img}
                alt={`slider-${idx}`}
                className="shadow-md w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;

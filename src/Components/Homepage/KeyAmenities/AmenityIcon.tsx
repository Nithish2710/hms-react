import * as React from "react";
import wifiImg from "../../../assets/wifi.png";
import celebImg from "../../../assets/celeb.png";
import diningImg from "../../../assets/dining.png";
import acImg from "../../../assets/ac.png";
import parkingImg from "../../../assets/park.png";
import interiorImg from "../../../assets/interior.png";
import dishImg from "../../../assets/dish.png";
import tvImg from "../../../assets/tv.png";

interface AmenityIconProps {
  type:
    | "wifi"
    | "document"
    | "gym"
    | "eye"
    | "shuttle"
    | "book"
    | "car"
    | "tv"
}

export const AmenityIcon: React.FC<AmenityIconProps> = ({ type }) => {
  const imageIcons: { [key: string]: string } = {
    wifi: wifiImg,
    document: celebImg,
    gym: diningImg,
    eye: acImg,
    shuttle: parkingImg,
    book : interiorImg,
    car: dishImg,
    tv : tvImg
  };

  if (imageIcons[type]) {
    return (
      <img
        src={imageIcons[type]}
        alt={type}
        className="w-12 h-12 object-contain"
      />
    );
  }

  const iconPaths: { [key: string]: React.ReactNode } = {
    gym: (
      <>
        <path d="M6.5 6.5h11v11h-11z" />
        <path d="M6.5 6.5L2 2" />
        <path d="M17.5 6.5L22 2" />
        <path d="M6.5 17.5L2 22" />
        <path d="M17.5 17.5L22 22" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    eye: (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    shuttle: (
      <>
        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2" />
        <path d="M16 5l1.5 7h4.5" />
        <path d="M2 10h15" />
        <path d="M6 5v5" />
        <path d="M10 5v5" />
      </>
    ),
    book: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
    car: (
      <>
        <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.3-.7l-2-2A1 1 0 0 0 19 10h-3V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H5a1 1 0 0 0-.7.3l-2 2a1 1 0 0 0-.3.7V16h3" />
        <circle cx="9" cy="19" r="2" />
        <circle cx="15" cy="19" r="2" />
      </>
    ),
    tv: (
      <>
        <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.3-.7l-2-2A1 1 0 0 0 19 10h-3V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H5a1 1 0 0 0-.7.3l-2 2a1 1 0 0 0-.3.7V16h3" />
        <circle cx="9" cy="19" r="2" />
        <circle cx="15" cy="19" r="2" />
      </>
    ),
  };

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#196f3d"
      strokeWidth="2"
    >
      {iconPaths[type]}
    </svg>
  );
};

import React from "react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
          fill="white"
        />
      </svg>
    ),
    title: "Luxury Amenities",
    description: "Premium facilities",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11.5V9.5L21 9V11L15 11.5ZM11 12L8 21L10.5 21L12.5 15L15 21L17.5 21L14.5 12H11Z"
          fill="white"
        />
      </svg>
    ),
    title: "Expert Service",
    description: "24/7 Support",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
        <path d="M2 17L12 22L22 17" fill="white" />
        <path d="M2 12L12 17L22 12" fill="white" />
      </svg>
    ),
    title: "Prime Location",
    description: "The Soul of Kongunadu",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
          fill="white"
        />
      </svg>
    ),
    title: "Free High Speed Wifi",
    description: "Trusted experience",
  },
];

export const FeatureGrid: React.FC = () => {
  return (
    <div className="grid gap-6 grid-cols-[repeat(2,1fr)] max-sm:gap-4 max-sm:grid-cols-[1fr]">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

import * as React from "react";
import { FeatureItem } from "./FeatureItem";

export function PropertyDetails() {
  const amenities = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-zinc-700"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      text: "Room Service",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-zinc-700"
          aria-hidden="true"
        >
          <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
        </svg>
      ),
      text: "Mountain View",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-zinc-700"
          aria-hidden="true"
        >
          <path d="M22 21c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1zM13 17.5h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1z" />
        </svg>
      ),
      text: "Pool Access",
    },
  ];

  const features = [
    {
      icon: "🏠",
      title: "Clean & Safe Stay",
      desc: "A well-maintained and hygienic space just for you.",
    },
    {
      icon: "✨",
      title: "Enhanced Cleaning",
      desc: "This host follows Staybnb's strict cleaning standards.",
    },
    {
      icon: "📍",
      title: "Excellent Location",
      desc: "90% of guests rated the location 5 stars.",
    },
    {
      icon: "✅",
      title: "Smooth Check-In",
      desc: "100% of guests gave check-in a 5-star rating.",
    },
  ];

  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold text-neutral-800">
        Experience Luxury Like Never Before
      </h2>
      <div className="flex gap-8 mb-8 max-sm:flex-col max-sm:gap-4">
        {amenities.map((amenity, index) => (
          <div className="flex gap-2 items-center" key={index}>
            {amenity.icon}
            <span className="text-base text-zinc-700">{amenity.text}</span>
          </div>
        ))}
      </div>
      <div className="grid gap-6">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.desc}
          />
        ))}
      </div>
    </section>
  );
}

import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex items-center p-4 rounded-xl bg-[white] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="flex shrink-0 justify-center items-center mr-4 w-12 h-12 bg-[#54a764] rounded-xl">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-base font-semibold text-slate-700">{title}</h3>
        <p className="m-0 text-sm text-gray-500">{description}</p>
      </div>
    </article>
  );
};

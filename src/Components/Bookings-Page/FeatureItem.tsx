import * as React from "react";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <article className="flex gap-4 items-start">
      <span className="text-2xl" role="img" aria-label={title}>
        {icon}
      </span>
      <div>
        <h3 className="mx-0 mt-0 mb-1 text-lg font-semibold text-neutral-800">
          {title}
        </h3>
        <p className="m-0 text-base text-zinc-700">{description}</p>
      </div>
    </article>
  );
}

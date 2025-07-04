import * as React from "react";
import { AmenityIcon } from "./AmenityIcon";

interface AmenityCardProps {
  iconType:
    | "wifi"
    | "document"
    | "gym"
    | "eye"
    | "shuttle"
    | "book"
    | "car"
    | "food"
  title: string;
}

export const AmenityCard: React.FC<AmenityCardProps> = ({
  iconType,
  title,
}) => {
  return (
    <article className="flex flex-col items-center rounded-xl ">
      <div className="">
        <AmenityIcon type={iconType} />
      </div>
      <h3 className="mb-3 mt-3 text-md font-semibold text-center text-slate-700">
        {title}
      </h3>``
    </article>
  );
};

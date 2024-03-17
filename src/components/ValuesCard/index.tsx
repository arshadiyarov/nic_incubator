import React from "react";
import { ValuesCardProps } from "@/components/ValuesCard/ValuesCardProps";

const ValuesCard: React.FC<ValuesCardProps> = ({ title, body, src }) => {
  return (
    <div className={"border-b py-6 flex items-start gap-6"}>
      <img
        src={src}
        alt="aboutUsIcon1"
        className={"w-[100px] bg-primary border border-black py-3 px-6"}
      />
      <div className={"space-y-2.5"}>
        <div className={"text-xl font-playfair font-bold"}>{title}</div>
        <div className={"text-text"}>{body}</div>
      </div>
    </div>
  );
};

export default ValuesCard;

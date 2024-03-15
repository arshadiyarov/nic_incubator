import React from "react";
import { ISectionHeader } from "@/components/SectionHeader/types";

const SectionHeader = ({ title, body }: ISectionHeader) => {
  return (
    <div className={"text-center flex flex-col items-center"}>
      <span className={"font-manrope font-bold text-xs text-otherSecond"}>
        {title}
      </span>
      <h3 className={"font-playfair text-4xl font-bold w-[500px]"}>{body}</h3>
    </div>
  );
};

export default SectionHeader;

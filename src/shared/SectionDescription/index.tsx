import React from "react";
import { SectionDescriptionProps } from "@/shared/SectionDescription/SectionDescriptionProps";

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  text,
  styles,
}) => {
  return <p className={`text-text ${styles}`}>{text}</p>;
};

export default SectionDescription;

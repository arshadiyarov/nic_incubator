import React from "react";
import { BenefitCardProps } from "@/shared/BenefitCard/BenefitCardProps";

const BenefitCard: React.FC<BenefitCardProps> = ({ title, body }) => {
  return (
    <div className={"flex flex-col gap-2 w-64"}>
      <img src="/img/ourBenIcon.png" alt="ourBenIcon" width={75} />
      <div className={"font-playfair text-xl font-bold"}>{title}</div>
      <div className={"text-text font-manrope text-sm"}>{body}</div>
    </div>
  );
};

export default BenefitCard;

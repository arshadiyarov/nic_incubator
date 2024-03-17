import React from "react";
import { MethodologyCardProps } from "@/components/MethodologyCard/MethodologyCardProps";

const MethodologyCard: React.FC<MethodologyCardProps> = ({ title, body }) => {
  return (
    <div className={"flex items-start gap-4"}>
      <img src="/img/check-circle.svg" alt="check-circle" />
      <div>
        <h4 className={"font-semibold"}>{title}</h4>
        <p className={"text-text text-sm"}>{body}</p>
      </div>
    </div>
  );
};

export default MethodologyCard;

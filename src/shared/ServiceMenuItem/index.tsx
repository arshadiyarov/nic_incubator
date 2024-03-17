import React from "react";
import { ServiceMenuItemProps } from "@/shared/ServiceMenuItem/ServiceMenuItemProps";

const ServiceMenuItem: React.FC<ServiceMenuItemProps> = ({
  title,
  price,
  description,
}) => {
  const formattedPrice = price.toFixed(2);

  const dotsCount =
    title.length < 14
      ? Math.max(50 - title.length, 0)
      : title.length <= 15
        ? Math.max(46 - title.length, 0)
        : Math.max(44 - title.length, 0);
  const dots = ".".repeat(dotsCount);

  return (
    <div className={"border-b-2 py-4 border-opacity-30 border-other"}>
      <div className={"flex gap-3"}>
        <h4 className={"font-playfair font-bold"}>{title}</h4>
        <span className={"font-manrope"}>{dots}</span>
        <span className={"font-manrope font-light text-text"}>from</span>
        <span className={"font-semibold"}>${formattedPrice}</span>
      </div>

      <p className={"text-sm"}>{description}</p>
    </div>
  );
};

export default ServiceMenuItem;

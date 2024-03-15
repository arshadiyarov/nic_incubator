import React from "react";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const OurBenefits = () => {
  return (
    <section className={"py-24"}>
      <div className={"w-[1010px] mx-auto"}>
        <div className={"text-center mb-10"}>
          <span className={"font-manrope font-bold text-xs text-otherSecond"}>
            OUR AWESOME BENEFITS
          </span>
          <h3 className={"font-playfair text-4xl font-bold"}>
            Actually what you’ll get from
          </h3>
        </div>
        <div className={"grid grid-cols-3 gap-12"}>
          <div className={"flex flex-col gap-2 w-64"}>
            <img src="/img/ourBenIcon.png" alt="ourBenIcon" width={75} />
            <div className={"font-playfair text-xl font-bold"}>
              Optimised Energy Efficiency
            </div>
            <div className={"text-text font-manrope text-sm"}>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </div>
          </div>
          <div className={"flex flex-col gap-2 w-64"}>
            <img src="/img/ourBenIcon.png" alt="ourBenIcon" width={75} />
            <div className={"font-playfair text-xl font-bold"}>
              Multi-faceted Water Filtration
            </div>
            <div className={"text-text font-manrope text-sm"}>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </div>
          </div>
          <div className={"flex flex-col gap-2 w-64"}>
            <img src="/img/ourBenIcon.png" alt="ourBenIcon" width={75} />
            <div className={"font-playfair text-xl font-bold"}>
              Uncompromising Quality and Durability
            </div>
            <div className={"text-text font-manrope text-sm"}>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </div>
          </div>
          <div className={"flex flex-col gap-2 w-64"}>
            <img src="/img/ourBenIcon.png" alt="ourBenIcon" width={75} />
            <div className={"font-playfair text-xl font-bold"}>
              An Ultra-Pampering Spa Experience
            </div>
            <div className={"text-text font-manrope text-sm"}>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </div>
          </div>
          <div className={"flex flex-col gap-2 w-64"}>
            <img src="/img/ourBenIcon.png" alt="ourBenIcon" width={75} />
            <div className={"font-playfair text-xl font-bold"}>
              Easy Care for Unparalleled Enjoyment
            </div>
            <div className={"text-text font-manrope text-sm"}>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </div>
          </div>
          <div className={"flex flex-col gap-2 w-64"}>
            <img src="/img/ourBenIcon.png" alt="ourBenIcon" width={75} />
            <div className={"font-playfair text-xl font-bold"}>
              Optimised Energy Efficiency
            </div>
            <div className={"text-text font-manrope text-sm"}>
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;

import React from "react";

import { FaRegStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const WhatOurCostumersSay = () => {
  return (
    <section className={"bg-primary py-24"}>
      <div className={"w-[1010px] mx-auto"}>
        <div className={"text-center mb-8"}>
          <span className={"font-manrope font-bold text-xs text-otherSecond"}>
            TESTIMONIALS
          </span>
          <h3 className={"font-playfair text-4xl font-bold"}>
            What our Customers says...
          </h3>
        </div>
        <div className={"flex gap-8"}>
          <div className={"w-[475]"}>
            <div className={"bg-white px-10 py-8 text-text font-manrope"}>
              “ It is a long established fact that a reader will be tracked
              distracted by the readable content of a page is when looking at
              its layout. The point of using Lorem of distribution it look like
              readable English “
            </div>
            <div
              className={
                "bg-secondary text-white px-10 py-4 flex justify-between items-center"
              }
            >
              <div className={" flex items-center gap-5"}>
                <img src="/img/revUser1.png" alt="revUser1" width={65} />
                <div>
                  <div className={"flex text-xs gap-1"}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStarHalfStroke />
                  </div>
                  <div className={"font-playfair font-semibold"}>
                    James Williams
                  </div>
                  <div className={"text-xs"}>United States</div>
                </div>
              </div>
              <div>
                <img src="/img/revFigure.svg" alt="revFigure" />
              </div>
            </div>
          </div>
          <div className={"w-[475]"}>
            <div className={"bg-white px-10 py-8 text-text font-manrope"}>
              “ It is a long established fact that a reader will be tracked
              distracted by the readable content of a page is when looking at
              its layout. The point of using Lorem of distribution it look like
              readable English “
            </div>
            <div
              className={
                "bg-secondary text-white px-10 py-4 flex justify-between items-center"
              }
            >
              <div className={" flex items-center gap-5"}>
                <img src="/img/revUser2.png" alt="revUser1" width={65} />
                <div>
                  <div className={"flex text-xs gap-1"}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStarHalfStroke />
                  </div>
                  <div className={"font-playfair font-semibold"}>
                    Lieo Jessica
                  </div>
                  <div className={"text-xs"}>United Kingdom</div>
                </div>
              </div>
              <div>
                <img src="/img/revFigure.svg" alt="revFigure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurCostumersSay;

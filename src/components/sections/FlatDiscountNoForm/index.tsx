import React from "react";

import { RxDotsHorizontal } from "react-icons/rx";

const FlatDiscountNoForm = () => {
  return (
    <section className={"bg-primary py-24"}>
      <div className={"w-[550px] mx-auto text-center"}>
        <span className={"text-otherSecond font-manrope text-xs font-bold"}>
          FLAT DISCOUNT
        </span>
        <h3 className={"text-4xl font-playfair font-bold my-3"}>
          Claim upto 50% offer on the most popular services...
        </h3>
        <p className={"text-text mb-8"}>
          Our Retreat is not meant to be an occasional treat, but rather a part
          of your routine that restores balance to your daily life.
        </p>
        <div className={"flex justify-center"}>
          <div
            className={
              "flex flex-col justify-between bg-white border border-other px-6 py-4"
            }
          >
            <div className={"flex gap-3 mb-2"}>
              <RxDotsHorizontal className={"text-3xl text-otherSecond"} />
              <div className={"font-manrope"}>
                <div className={"text-sm font-bold"}>MAIL US :</div>
                <div className={"text-sm font-semibold"}>
                  info@beautyness.com
                </div>
              </div>
            </div>
            <div className={"flex gap-3"}>
              <RxDotsHorizontal className={"text-3xl text-otherSecond"} />
              <div className={"font-manrope"}>
                <div className={"text-sm font-bold"}>CALL US :</div>
                <div className={"text-sm font-semibold"}>
                  (+22) 123 4568 009
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "bg-secondary text-white px-6 py-3 font-manrope text-center"
            }
          >
            <div className={"font-semibold"}>- GET FLAT -</div>
            <div className={"text-6xl font-bold"}>
              50<span className={"text-3xl font-light"}>%</span>
            </div>
            <div className={"font-semibold"}>Discount</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlatDiscountNoForm;

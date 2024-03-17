import React from "react";

import { RxDotsHorizontal } from "react-icons/rx";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import SectionDescription from "@/shared/SectionDescription";
import CouponCard from "@/components/CouponCard";

const FlatDiscountNoForm = () => {
  return (
    <section className={"bg-primary py-24"}>
      <div className={"w-[550px] mx-auto flex flex-col items-center gap-5"}>
        <ShortSectionTitle text={"FLAT DISCOUNT"} />
        <SectionTitle
          text={"Claim upto 50% offer on the most popular services..."}
          styles={"w-[500px] mx-auto text-center"}
        />
        <SectionDescription
          text={
            "Our Retreat is not meant to be an occasional treat, but rather a part of your routine that restores balance to your daily life."
          }
          styles={"text-center"}
        />
        <CouponCard
          email={"info@beautyness.com"}
          phone={"(+22) 123 4568 009"}
          discount={50}
        />
      </div>
    </section>
  );
};

export default FlatDiscountNoForm;

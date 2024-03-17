import React from "react";

import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import SectionDescription from "@/shared/SectionDescription";
import CouponCard from "@/components/CouponCard";
import AppointmentFormCol from "@/components/AppointmentFormCol";

const FlatDiscount = () => {
  return (
    <section className={"bg-primary py-24"}>
      <div className={"w-[1010px] flex mx-auto justify-between"}>
        <div className={"w-[460px] space-y-4"}>
          <ShortSectionTitle text={"FLAT DISCOUNT"} />
          <SectionTitle
            text={"Claim upto 50% offer on the most popular services..."}
            styles={"w-[350px]"}
          />
          <SectionDescription
            text={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words."
            }
          />
          <CouponCard
            email={"info@beautyness.com"}
            phone={"(+22) 123 4568 009"}
            discount={50}
          />
        </div>
        <div className={"bg-white drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]"}>
          <AppointmentFormCol />
        </div>
      </div>
    </section>
  );
};

export default FlatDiscount;

import React from "react";
import SectionTitle from "@/shared/SectionTitle";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import ReviewCard from "@/components/ReviewCard";

const WhatOurCostumersSay = () => {
  return (
    <section className={"bg-primary py-24"}>
      <div className={"w-[1010px] mx-auto"}>
        <div className={"text-center mb-8"}>
          <ShortSectionTitle text={"TESTIMONIALS"} />
          <SectionTitle text={"What our Customers says..."} />
        </div>
        <div className={"flex gap-8"}>
          <ReviewCard
            body={
              "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “"
            }
            author={"James Williams"}
            country={"United States"}
            rating={100}
            src={"/img/revUser1.png"}
          />
          <ReviewCard
            body={
              "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “"
            }
            author={"Lieo Jessica"}
            country={"United Kingdom"}
            rating={100}
            src={"/img/revUser2.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatOurCostumersSay;

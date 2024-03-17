import React from "react";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import BenefitCard from "@/shared/BenefitCard";

const OurBenefits = () => {
  return (
    <section className={"p-24"}>
      <div className={"w-[1010px] mx-auto"}>
        <div className={"text-center mb-10"}>
          <ShortSectionTitle text={"OUR AWESOME BENEFITS"} />
          <SectionTitle text={"Actually what you’ll get from"} />
        </div>
        <div className={"grid grid-cols-3 gap-12"}>
          <BenefitCard
            title={"Optimised Energy Efficiency"}
            body={
              "The point of using Lorem Ipsum is that using making it look like readable."
            }
          />
          <BenefitCard
            title={"Multi-faceted Water Filtration"}
            body={
              "The point of using Lorem Ipsum is that using making it look like readable."
            }
          />
          <BenefitCard
            title={"Uncompromising Quality and Durability"}
            body={
              "The point of using Lorem Ipsum is that using making it look like readable."
            }
          />
          <BenefitCard
            title={"An Ultra-Pampering Spa Experience"}
            body={
              "The point of using Lorem Ipsum is that using making it look like readable."
            }
          />
          <BenefitCard
            title={"Easy Care for Unparalleled Enjoyment"}
            body={
              "The point of using Lorem Ipsum is that using making it look like readable."
            }
          />
          <BenefitCard
            title={"Optimised Energy Efficiency"}
            body={
              "The point of using Lorem Ipsum is that using making it look like readable."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;

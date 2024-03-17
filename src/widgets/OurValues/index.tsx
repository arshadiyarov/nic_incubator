import React from "react";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import ValuesCard from "@/components/ValuesCard";

const OurValues = () => {
  return (
    <section>
      <div className={"w-[550px] mx-auto py-24"}>
        <div className={"text-center"}>
          <ShortSectionTitle text={"OUR VALUES"} />
          <SectionTitle text={"The work values we thrive for"} />
        </div>
        <div className={"mt-10"}>
          <ValuesCard
            title={"Beauty Experts"}
            body={
              "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
            }
            src={"/img/aboutUsIcon1.png"}
          />
          <ValuesCard
            title={"Beauty Experts"}
            body={
              "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
            }
            src={"/img/aboutUsIcon1.png"}
          />
          <ValuesCard
            title={"Beauty Experts"}
            body={
              "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
            }
            src={"/img/aboutUsIcon1.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default OurValues;

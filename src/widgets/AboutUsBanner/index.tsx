import React from "react";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import SectionDescription from "@/shared/SectionDescription";

const AboutUsBanner = () => {
  return (
    <section className={"bg-primary py-32"}>
      <div className={"w-[1010px] mx-auto text-white"}>
        <div
          className={"bg-secondary py-12 px-16 flex flex-row-reverse relative"}
        >
          <img
            src="/img/aboutUsBannerImg.png"
            alt="aboutUsBannerImg"
            width={385}
            className={"absolute left-12 -top-[45px]"}
          />
          <div className={"w-[450px] justify-self-end space-y-6"}>
            <ShortSectionTitle text={"ABOUT US"} styles={"text-white"} />
            <SectionTitle
              text={"Style is a Reflection of your Attitude & your Personality"}
              styles={"text-5xl font-semibold"}
            />
            <SectionDescription
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to  injected humour, or randomised words which don't look even  many desktop publishing packages."
              }
              styles={"text-white"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBanner;

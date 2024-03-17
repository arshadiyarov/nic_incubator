import React from "react";
import AboutUsSectionCardList from "@/widgets/AboutUsSectionCardList";
import SectionDescription from "@/shared/SectionDescription";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";

const AboutUs = () => {
  return (
    <section className={"bg-primary py-24"}>
      <div className={"w-[1010px] flex mx-auto justify-between"}>
        <div className={"w-[460px]"}>
          <div className={"space-y-3"}>
            <ShortSectionTitle text={"ABOUT US"} />
            <SectionTitle
              text={"The Beauty is about being Comfortable in your own skin!"}
            />
            <SectionDescription
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages."
              }
            />
          </div>
          <AboutUsSectionCardList />
        </div>
        <div className={"relative"}>
          <img
            src="/img/aboutUsMainImg.jpg"
            alt="aboutUsMainImg"
            className={
              "absolute top-8 right-8 drop-shadow-[0_0_50px_rgba(0,0,0,0.4)]"
            }
          />
          <div className={"bg-background2 w-[400px] h-[460px]"}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

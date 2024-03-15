import React from "react";

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
          <div className={"w-[450px] justify-self-end"}>
            <span className={"font-manrope text-sm font-light"}>ABOUT US</span>
            <div className={"font-playfair text-5xl fon t-bold my-5"}>
              Style is a Reflection of your Attitude & your Personality
            </div>
            <div className={"font-manrope text-sm leading-6"}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words which don&apos;t look even
              many desktop publishing packages.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBanner;

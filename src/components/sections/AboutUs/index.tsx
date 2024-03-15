import React from "react";

const AboutUs = () => {
  return (
    <section className={"bg-primary py-24"}>
      <div className={"w-[1010px] flex mx-auto justify-between"}>
        <div className={"w-[460px]"}>
          <span className={"text-otherSecond font-manrope text-xs font-bold"}>
            ABOUT US
          </span>
          <h3 className={"text-4xl font-playfair font-bold w-[350px] my-3"}>
            The Beauty is about being Comfortable in your own skin!
          </h3>
          <p className={"text-text"}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomised words which don't look even many
            desktop publishing packages.
          </p>
          <div className={"flex justify-between mt-6"}>
            <div
              className={
                "flex flex-col items-center border border-black bg-white w-[145px] py-4"
              }
            >
              <img src="/img/aboutUsIcon1.png" alt="aboutUsIcon1" />
              <h2
                className={"font-playfair text-center font-bold text-2xl mt-2"}
              >
                Beauty Experts
              </h2>
            </div>
            <div
              className={
                "flex flex-col items-center border border-black bg-white w-[152px] py-4"
              }
            >
              <img src="/img/aboutUsIcon2.png" alt="aboutUsIcon2" />
              <h2
                className={"font-playfair text-center font-bold text-2xl mt-2"}
              >
                Great Services
              </h2>
            </div>
            <div
              className={
                "flex flex-col items-center border border-black bg-white w-[152px] py-4"
              }
            >
              <img src="/img/aboutUsIcon3.png" alt="aboutUsIcon3" />
              <h2
                className={"font-playfair text-center font-bold text-2xl mt-2"}
              >
                100% Genuine
              </h2>
            </div>
          </div>
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

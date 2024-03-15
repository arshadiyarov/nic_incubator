import React from "react";
import SectionHeader from "@/components/SectionHeader";

const ShareUs = () => {
  return (
    <section className={"py-24"}>
      <div className={"w-[1010px] mx-auto flex flex-col"}>
        <div className={"flex gap-10"}>
          <div className={"flex flex-col w-1/2"}>
            <span className={"font-manrope font-bold text-xs text-otherSecond"}>
              SHARE US
            </span>
            <strong className={"font-playfair text-4xl font-bold w-52"}>
              Follow us on Instagram
            </strong>
            <p className={"text-text font-manrope py-10"}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words many desktop publishing
              packages.
            </p>
            <img src="/img/shareUs1.png" alt="shareUs1" />
          </div>
          <div className={"space-y-10"}>
            <img src="/img/shareUs2.jpg" alt="shareUs2" />
            <img src="/img/shareUs3.jpg" alt="shareUs3" />
          </div>
        </div>
        <button
          className={
            "bg-otherSecond text-xs text-white font-bold font-manrope py-4 px-14 mt-10 w-fit self-center"
          }
        >
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default ShareUs;

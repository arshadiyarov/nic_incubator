import React from "react";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import SectionDescription from "@/shared/SectionDescription";
import ButtonFill from "@/shared/ButtonFill";

const ShareUs = () => {
  return (
    <section className={"py-24"}>
      <div className={"w-[1010px] mx-auto flex flex-col"}>
        <div className={"flex gap-10"}>
          <div className={"flex flex-col w-1/2 space-y-5"}>
            <ShortSectionTitle text={"SHARE US"} />
            <SectionTitle
              text={"Follow us on Instagram"}
              styles={"w-[350px]"}
            />
            <SectionDescription
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to  injected humour, or randomised words many desktop publishing  packages."
              }
            />
            <img src="/img/shareUs1.png" alt="shareUs1" />
          </div>
          <div className={"space-y-10"}>
            <img src="/img/shareUs2.jpg" alt="shareUs2" />
            <img src="/img/shareUs3.jpg" alt="shareUs3" />
          </div>
        </div>
        <ButtonFill text={"CONTACT US"} styles={"self-center mt-10"} />
      </div>
    </section>
  );
};

export default ShareUs;

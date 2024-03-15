import React from "react";
import SectionHeader from "@/components/SectionHeader";

const OurValues = () => {
  return (
    <section>
      <div className={"w-[550px] mx-auto py-24"}>
        <SectionHeader
          title={"OUR VALUES"}
          body={"The work values we thrive for"}
        />
        <div className={"mt-10"}>
          <div className={"border-b py-6 flex items-start gap-6"}>
            <img
              src="/img/aboutUsIcon1.png"
              alt="aboutUsIcon1"
              className={"w-[100px] bg-primary border border-black py-3 px-6"}
            />
            <div className={"space-y-2.5"}>
              <div className={"text-xl font-playfair font-bold"}>
                Beauty Experts
              </div>
              <div className={"text-text"}>
                The majority have suffered alteration in some form, buying to
                injected humour, or randomised words which desktop publishing
                packages.
              </div>
            </div>
          </div>
          <div className={"border-b py-6 flex items-start gap-6"}>
            <img
              src="/img/aboutUsIcon1.png"
              alt="aboutUsIcon1"
              className={"w-[100px] bg-primary border border-black py-3 px-6"}
            />
            <div className={"space-y-2.5"}>
              <div className={"text-xl font-playfair font-bold"}>
                Beauty Experts
              </div>
              <div className={"text-text"}>
                The majority have suffered alteration in some form, buying to
                injected humour, or randomised words which desktop publishing
                packages.
              </div>
            </div>
          </div>
          <div className={"border-b py-6 flex items-start gap-6"}>
            <img
              src="/img/aboutUsIcon1.png"
              alt="aboutUsIcon1"
              className={"w-[100px] bg-primary border border-black py-3 px-6"}
            />
            <div className={"space-y-2.5"}>
              <div className={"text-xl font-playfair font-bold"}>
                Beauty Experts
              </div>
              <div className={"text-text"}>
                The majority have suffered alteration in some form, buying to
                injected humour, or randomised words which desktop publishing
                packages.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

import React from "react";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import SectionDescription from "@/shared/SectionDescription";
import MethodologyCard from "@/components/MethodologyCard";

const WhatIncludes = () => {
  return (
    <section className={"bg-primary"}>
      <div className={"w-[1010px] mx-auto flex items-center gap-20"}>
        <div className={"flex flex-col w-[420px] space-y-3"}>
          <ShortSectionTitle text={"What Includes?"} />
          <SectionTitle text={"About the service"} styles={"w-[500px]"} />
          <SectionDescription
            text={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal these content here, making it look like readable English."
            }
            styles={"text-sm"}
          />
          <h3 className={"font-playfair text-xl font-bold"}>
            Our Methodology :
          </h3>
          <div className={"space-y-3"}>
            <MethodologyCard
              title={"The Assessment Stage"}
              body={
                "The point of using Lorem Ipsum is that it has a more-or-less normal letters."
              }
            />
            <MethodologyCard
              title={"The Initialisation Stage"}
              body={
                "The point of using Lorem Ipsum is that it has a more-or-less normal letters."
              }
            />
            <MethodologyCard
              title={"The Treatment Stage"}
              body={
                "The point of using Lorem Ipsum is that it has a more-or-less normal letters."
              }
            />
          </div>
        </div>
        <video width={764.5} loop autoPlay controls>
          <source src="/img/videoPlaceholder1.mp4" />
        </video>
      </div>
    </section>
  );
};

export default WhatIncludes;

import React from "react";
import MembershipCard from "@/components/MembershipCard";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";

const MembershipSection = () => {
  return (
    <section className={"py-24"}>
      <div className={"w-[1010px] mx-auto"}>
        <ShortSectionTitle
          text={"Easy & affordable Booking"}
          styles={"text-center"}
        />
        <SectionTitle text={"Membership Cards"} styles={"text-center"} />
        <div className={"flex justify-between mt-8"}>
          <MembershipCard
            title={"Comfort Relax"}
            body={[
              "Releases muscle tension",
              "Relieves lower back pain",
              "Heals sports injuries",
              "Increases mobility",
              "Increases muscle strength",
            ]}
            price={49}
            planName={"GOLD CARD"}
          />
          <MembershipCard
            title={"Luxury Retreat"}
            body={[
              "Releases muscle tension",
              "Relieves lower back pain",
              "Heals sports injuries",
              "Increases mobility",
              "Increases muscle strength",
            ]}
            price={89}
            planName={"PLATINUM"}
          />
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;

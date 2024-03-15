import React from "react";
import SectionHeader from "@/components/SectionHeader";
import MembershipCard from "@/components/MembershipCard";
import { nanoid } from "nanoid";
import { CardType } from "@/components/MembershipCard/MembershipCard.type";

const MembershipSection = () => {
  const cards: CardType[] = [
    {
      id: nanoid(),
      title: "Comfort Relax",
      body: [
        "Releases muscle tension",
        "Relieves lower back pain",
        "Heals sports injuries",
        "Increases mobility",
        "Increases muscle strength",
      ],
      price: 49,
      type: "GOLD CARD",
    },
    {
      id: nanoid(),
      title: "Luxury Retreat",
      body: [
        "Releases muscle tension",
        "Relieves lower back pain",
        "Heals sports injuries",
        "Increases mobility",
        "Increases muscle strength",
      ],
      price: 89,
      type: "PLATINUM",
    },
  ];

  return (
    <section className={"py-24"}>
      <div className={"w-[1010px] mx-auto"}>
        <SectionHeader
          title={"Easy & affordable Booking"}
          body={"Membership Cards"}
        />
        <div className={"flex justify-between mt-8"}>
          <MembershipCard cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;

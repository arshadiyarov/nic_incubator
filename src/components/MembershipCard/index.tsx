import React from "react";
import {
  CardType,
  CardsType,
} from "@/components/MembershipCard/MembershipCard.type";

const MembershipCard = ({ cards }: CardsType) => {
  return cards.map((card: CardType) => (
    <div
      key={card.id}
      className={"bg-secondary p-8 flex gap-20 w-fit relative"}
    >
      <div className={"text-white "}>
        <strong className={"font-playfair text-2xl font-bold"}>
          {card.title}
        </strong>
        <ul className={"space-y-2 mt-5"}>
          {card.body.map((list: string) => (
            <li key={"list"} className={"flex items-center gap-5 font-manrope"}>
              <img src="/img/check-circle.svg" alt="check-circle" />
              {list}
            </li>
          ))}
        </ul>
        <button
          className={"bg-other text-xs font-bold font-manrope py-4 px-8 mt-6"}
        >
          SUBSCRIBE NOW
        </button>
      </div>
      <div>
        <div
          className={
            "bg-copy px-3 py-5 text-white text-center absolute top-0 right-0"
          }
        >
          <div className={"font-manrope text-5xl font-bold"}>${card.price}</div>
          <div className={"font-playfair"}>per month</div>
        </div>
      </div>
      <div
        className={
          "font-manrope font-bold text-3xl text-white opacity-30 self-end [writing-mode:vertical-lr] rotate-180"
        }
      >
        {card.type}
      </div>
    </div>
  ));
};

export default MembershipCard;

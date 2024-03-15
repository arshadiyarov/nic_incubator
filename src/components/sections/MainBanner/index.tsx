import React from "react";
import { Item } from "@/components/sections/MainBanner/MainBanner.type";

const MainBanner = ({ title, body }: Item) => {
  return (
    <section className={"py-24 bg-mainBanner"}>
      <div className={"w-[575px] mx-auto"}>
        <div className={"text-center text-white"}>
          <span className={"font-manrope font-bold text-sm"}>{title}</span>
          <h3 className={"font-playfair text-5xl font-bold"}>{body}</h3>
          <button
            className={
              "bg-otherSecond text-xs font-bold font-manrope py-3 px-6 mt-6"
            }
          >
            MAKE A RESERVATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;

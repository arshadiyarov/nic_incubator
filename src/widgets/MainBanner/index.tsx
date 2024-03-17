import React from "react";
import { MainBannerProps } from "@/widgets/MainBanner/MainBannerProps";
import ButtonFill from "@/shared/ButtonFill";

const MainBanner = ({ children }: MainBannerProps) => {
  return (
    <section className={"py-24 bg-mainBanner"}>
      <div className={"text-center text-white space-y-3"}>
        {children}
        <ButtonFill text={"MAKE A RESERVATION"} />
      </div>
    </section>
  );
};

export default MainBanner;

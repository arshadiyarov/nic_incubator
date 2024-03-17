import MainBanner from "@/widgets/MainBanner";
import OurValues from "@/widgets/OurValues";
import AboutUsBanner from "@/widgets/AboutUsBanner";
import OurExperts from "@/widgets/OurExperts";
import WhatOurCostumersSay from "@/widgets/WhatOurCustomersSay";
import ShareUs from "@/widgets/ShareUs";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import React from "react";

const AboutPage = () => {
  return (
    <main>
      <MainBanner>
        <ShortSectionTitle
          text={"SHORT STORY ABOUT US"}
          styles={"text-white"}
        />
        <SectionTitle
          text={"The big story behind, our beautyness center"}
          styles={"w-[450px] mx-auto"}
        />
      </MainBanner>
      <OurValues />
      <AboutUsBanner />
      <OurExperts />
      <WhatOurCostumersSay />
      <ShareUs />
    </main>
  );
};

export default AboutPage;

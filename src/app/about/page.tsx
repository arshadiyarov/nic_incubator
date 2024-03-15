import React from "react";
import MainBanner from "@/components/sections/MainBanner";
import OurValues from "@/components/sections/OurValues";
import AboutUsBanner from "@/components/sections/AboutUsBanner";
import OurExperts from "@/components/sections/OurExperts";
import WhatOurCostumersSay from "@/components/sections/WhatOurCustomersSay";
import ShareUs from "@/components/sections/ShareUs";

const About = () => {
  return (
    <main>
      <MainBanner
        title={"SHORT STORY ABOUT US"}
        body={"The big story behind, our beautyness center"}
      />
      <OurValues />
      <AboutUsBanner />
      <OurExperts />
      <WhatOurCostumersSay />
      <ShareUs />
    </main>
  );
};

export default About;

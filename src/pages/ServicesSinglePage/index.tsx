import React from "react";
import MainBanner from "@/widgets/MainBanner";
import WhatIncludes from "@/widgets/WhatIncludes";
import MembershipSection from "@/widgets/MembershipSection";
import MakeAppointment from "@/widgets/MakeAppointment";
import OurBenefits from "@/widgets/OurBenefits";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";

const ServicesSinglePage = () => {
  return (
    <main>
      <MainBanner>
        <ShortSectionTitle text={"THE PERFECT SERVICE"} />
        <SectionTitle text={"Service to Elevate the Better lifestyle"} />
      </MainBanner>
      <WhatIncludes />
      <MembershipSection />
      <MakeAppointment />
      <OurBenefits />
    </main>
  );
};

export default ServicesSinglePage;

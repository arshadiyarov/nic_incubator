import React from "react";
import MainBanner from "@/components/sections/MainBanner";
import MembershipSection from "@/components/sections/MembershipSection";
import OurBenefits from "@/components/sections/OurBenefits";
import MakeAppointment from "@/components/sections/MakeAppointment";
import WhatIncludes from "@/components/sections/WhatIncludes";

const ServicesSingle = () => {
  return (
    <main>
      <MainBanner
        title={"THE PERFECT SERVICE"}
        body={"Service to Elevate the Better lifestyle"}
      />
      <WhatIncludes />
      <MembershipSection />
      <MakeAppointment />
      <OurBenefits />
    </main>
  );
};

export default ServicesSingle;

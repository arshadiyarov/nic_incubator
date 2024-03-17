import React from "react";
import Welcome from "@/widgets/Welcome";
import Services from "@/widgets/Services";
import AboutUs from "@/widgets/AboutUs";
import OurServices from "@/widgets/OurServices";
import WhatOurCostumersSay from "@/widgets/WhatOurCustomersSay";
import OurBenefits from "@/widgets/OurBenefits";
import FlatDiscount from "@/widgets/FlatDiscount";
import OurBlog from "@/widgets/OurBlog";
import OurServicesCard from "@/components/OurServicesCard";

const Home = () => {
  return (
    <main>
      <Welcome />
      <Services />
      <AboutUs />
      <OurServices>
        <OurServicesCard src={"/img/ourServices1.jpg"} />
        <OurServicesCard src={"/img/ourServices2.jpg"} isLeft={true} />
      </OurServices>
      <WhatOurCostumersSay />
      <OurBenefits />
      <FlatDiscount />
      <OurBlog />
    </main>
  );
};

export default Home;

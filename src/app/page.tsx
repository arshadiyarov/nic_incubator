import Welcome from "../components/sections/Welcome";
import Services from "@/components/sections/Services";
import AboutUs from "@/components/sections/AboutUs";
import OurServices from "@/components/sections/OurServices";
import WhatOurCostumersSay from "@/components/sections/WhatOurCustomersSay";
import OurBenefits from "@/components/sections/OurBenefits";
import FlatDiscount from "@/components/sections/FlatDiscount";
import OurBlog from "@/components/sections/OurBlog";

export default function Home() {
  return (
    <main>
      <Welcome />
      <Services />
      <AboutUs />
      <OurServices />
      <WhatOurCostumersSay />
      <OurBenefits />
      <FlatDiscount />
      <OurBlog />
    </main>
  );
}

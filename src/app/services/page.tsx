import FlatDiscountNoForm from "@/components/sections/FlatDiscountNoForm";
import ServicesOurSevices from "@/components/sections/ServicesOurSevices";
import MainBanner from "@/components/sections/MainBanner";

const Services = () => {
  return (
    <main>
      <MainBanner
        title={"OUR SERVICE"}
        body={"Well Experience Beauty at your Service"}
      />
      <ServicesOurSevices />
      <FlatDiscountNoForm />
    </main>
  );
};

export default Services;

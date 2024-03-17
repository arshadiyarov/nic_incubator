import MainBanner from "@/widgets/MainBanner";
import FlatDiscountNoForm from "@/widgets/FlatDiscountNoForm";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import OurServices from "@/widgets/OurServices";
import OurServicesCard from "@/components/OurServicesCard";

const ServicesPage = () => {
  return (
    <main>
      <MainBanner>
        <ShortSectionTitle text={"OUR SERVICE"} styles={"text-white"} />
        <SectionTitle
          text={"Well Experience Beauty at your Service"}
          styles={"w-[450px] mx-auto"}
        />
      </MainBanner>
      <OurServices>
        <OurServicesCard src={"/img/ourServices1.jpg"} />
        <OurServicesCard src={"/img/ourServices2.jpg"} isLeft={true} />
        <OurServicesCard src={"/img/ourServices3.jpg"} />
        <OurServicesCard src={"/img/ourServices4.jpg"} isLeft={true} />
        <OurServicesCard src={"/img/ourServices5.jpg"} />
      </OurServices>
      <FlatDiscountNoForm />
    </main>
  );
};

export default ServicesPage;

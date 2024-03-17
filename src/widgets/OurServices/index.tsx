import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import OurServicesCard from "@/components/OurServicesCard";
import { OurServicesProps } from "@/widgets/OurServices/OurServicesProps";

const OurServices: React.FC<OurServicesProps> = ({ children }) => {
  return (
    <section className={"py-24"}>
      <div className={"w-[550px] mb-10 mx-auto text-center"}>
        <ShortSectionTitle text={"Our Services"} />
        <SectionTitle
          text={"We are Experienced in making you very Beautiful"}
        />
      </div>
      <div className={"w-[900px] mx-auto "}>{children}</div>
    </section>
  );
};

export default OurServices;

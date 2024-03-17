import ServiceMenuItem from "@/shared/ServiceMenuItem";
import ButtonBorder from "@/shared/ButtonBorder";

const OurServicesCardMenu = ({ isLeft = false }) => {
  return (
    <div className={`${isLeft ? "self-end mb-6" : ""}`}>
      <div className={`mb-6 `}>
        <ServiceMenuItem
          title={"Face masks"}
          price={48}
          description={
            "The versions have evolved over the sometimes by accident."
          }
        />
        <ServiceMenuItem
          title={"Full body massage"}
          price={54}
          description={
            "The versions have evolved over the sometimes by accident."
          }
        />
        <ServiceMenuItem
          title={"Geothermal spa"}
          price={54}
          description={
            "The versions have evolved over the sometimes by accident."
          }
        />
        <ServiceMenuItem
          title={"Sauna relax"}
          price={73}
          description={
            "The versions have evolved over the sometimes by accident."
          }
        />
      </div>
      <ButtonBorder text={"GET AN APPOINTMENT"} />
    </div>
  );
};

export default OurServicesCardMenu;

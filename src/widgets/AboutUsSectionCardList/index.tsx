import AboutUsSectionCard from "@/components/AboutUsSectionCard";

const AboutUsSectionCardList = () => {
  return (
    <div className={"flex justify-between mt-6"}>
      <AboutUsSectionCard
        text={"Beauty Experts"}
        src={"/img/aboutUsIcon1.png"}
      />
      <AboutUsSectionCard
        text={"Great Services"}
        src={"/img/aboutUsIcon2.png"}
      />
      <AboutUsSectionCard text={"100% Genuine"} src={"/img/aboutUsIcon3.png"} />
    </div>
  );
};

export default AboutUsSectionCardList;

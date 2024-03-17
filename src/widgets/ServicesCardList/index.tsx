import ServicesCard from "@/components/ServicesCard";

const ServicesCardList = () => {
  return (
    <div className={"flex gap-20 w-[1010px] mx-auto "}>
      <ServicesCard
        src={"/img/services1.png"}
        title={"Spa & Massage"}
        body={
          "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text."
        }
      />
      <ServicesCard
        src={"/img/services2.png"}
        title={"Hair & Beauty"}
        body={
          "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text."
        }
      />
      <ServicesCard
        src={"/img/services3.png"}
        title={"Body Treatments"}
        body={
          "If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text."
        }
      />
    </div>
  );
};

export default ServicesCardList;

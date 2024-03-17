import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import SectionTitle from "@/shared/SectionTitle";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import ExpertCard from "@/components/ExpertCard";

const OurExperts = () => {
  return (
    <section className={"py-24"}>
      <div className={"w-[1010px] mx-auto"}>
        <div className={"text-center"}>
          <ShortSectionTitle text={"MEET OUR EXPERTS"} />
          <SectionTitle
            text={"The amazing women behind Beautyness"}
            styles={"w-[550px] mx-auto"}
          />
        </div>
        <div className={"flex justify-between mt-6"}>
          <ExpertCard
            src={"/img/expert1.png"}
            body={
              "I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
            }
            fullName={"Sherlin D’Cruz"}
            sphere={"BEAUTYNESS EXPERT"}
            facebook={""}
            twitter={""}
            linkedIn={""}
          />
          <ExpertCard
            src={"/img/expert2.png"}
            body={
              "I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
            }
            fullName={"Maria Sharapova"}
            sphere={"BEAUTYNESS EXPERT"}
            facebook={""}
            twitter={""}
            linkedIn={""}
          />
          <ExpertCard
            src={"/img/expert3.png"}
            body={
              "I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
            }
            fullName={"Angeline Jenifer"}
            sphere={"BEAUTYNESS EXPERT"}
            facebook={""}
            twitter={""}
            linkedIn={""}
          />
        </div>
      </div>
    </section>
  );
};

export default OurExperts;

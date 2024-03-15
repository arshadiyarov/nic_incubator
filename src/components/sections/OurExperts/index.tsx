import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const OurExperts = () => {
  return (
    <section className={"py-24"}>
      <div className={"w-[1010px] mx-auto"}>
        <SectionHeader
          title={"MEET OUR EXPERTS"}
          body={"The amazing women behind Beautyness"}
        />
        <div className={"flex justify-between mt-6"}>
          <div className={"w-[300px] space-y-4"}>
            <img src="/img/expert1.png" alt="expert1" />
            <div className={"text-center"}>
              <strong className={"font-playfair text-xl"}>
                Sherlin D’Cruz
              </strong>
              <p className={"text-other mb-1 text-sm font-medium"}>
                BEAUTYNESS EXPERT
              </p>
              <p className={"text-text"}>
                I must explain to you how all this mistaken idea of denouncing
                pleasure that will araise praising pain
              </p>
            </div>
            <div className={"flex justify-between w-24 mx-auto"}>
              <Link href={""}>
                <FaFacebookF />
              </Link>
              <Link href={""}>
                <FaTwitter />
              </Link>
              <Link href={""}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <div className={"w-[300px] space-y-4"}>
            <img src="/img/expert1.png" alt="expert1" />
            <div className={"text-center"}>
              <strong className={"font-playfair text-xl"}>
                Sherlin D’Cruz
              </strong>
              <p className={"text-other mb-1 text-sm font-medium"}>
                BEAUTYNESS EXPERT
              </p>
              <p className={"text-text"}>
                I must explain to you how all this mistaken idea of denouncing
                pleasure that will araise praising pain
              </p>
            </div>
            <div className={"flex justify-between w-24 mx-auto"}>
              <Link href={""}>
                <FaFacebookF />
              </Link>
              <Link href={""}>
                <FaTwitter />
              </Link>
              <Link href={""}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <div className={"w-[300px] space-y-4"}>
            <img src="/img/expert1.png" alt="expert1" />
            <div className={"text-center"}>
              <strong className={"font-playfair text-xl"}>
                Sherlin D’Cruz
              </strong>
              <p className={"text-other mb-1 text-sm font-medium"}>
                BEAUTYNESS EXPERT
              </p>
              <p className={"text-text"}>
                I must explain to you how all this mistaken idea of denouncing
                pleasure that will araise praising pain
              </p>
            </div>
            <div className={"flex justify-between w-24 mx-auto"}>
              <Link href={""}>
                <FaFacebookF />
              </Link>
              <Link href={""}>
                <FaTwitter />
              </Link>
              <Link href={""}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExperts;

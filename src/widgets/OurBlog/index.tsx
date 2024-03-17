import React from "react";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import BlogCard from "@/components/BlogCard";
import ButtonBorder from "@/shared/ButtonBorder";

const OurBlog = () => {
  return (
    <section className={"py-24"}>
      <div className={"w-[1010px] mx-auto space-y-10"}>
        <div className={"text-center"}>
          <ShortSectionTitle text={"OUR BLOG"} />
          <SectionTitle text={"Latest Updates"} />
        </div>
        <div className={"flex justify-between"}>
          <BlogCard
            date={"11TH AUGUST 2021"}
            src={"/img/ourBlog1.png"}
            title={"The energy efficiency of the hydrotherapy or swim"}
            author={"BY PETER BERGSON"}
            body={
              "The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
            }
          />
          <BlogCard
            date={"11TH AUGUST 2021"}
            src={"/img/ourBlog2.png"}
            title={"Tips to improve your body via cleansing"}
            author={"BY PETER BERGSON"}
            body={
              "The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
            }
          />
          <BlogCard
            date={"11TH AUGUST 2021"}
            src={"/img/ourBlog3.png"}
            title={"Experience the beauty at our beauty spa"}
            author={"BY PETER BERGSON"}
            body={
              "The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
            }
          />
        </div>
        <div className={"text-center"}>
          <ButtonBorder text={"VIEW MORE STORIES"} />
        </div>
      </div>
    </section>
  );
};

export default OurBlog;

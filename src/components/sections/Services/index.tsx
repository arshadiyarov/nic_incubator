import React from "react";

const Services = () => {
  return (
    <section className={"py-24"}>
      <div className={"flex gap-20 w-[1010px] mx-auto "}>
        <div className={"w-[330px]"}>
          <img src="/img/services1.png" alt="services1" className={"mb-6"} />
          <h3 className={"font-playfair text-2xl font-bold mb-2"}>
            Spa & Massage
          </h3>
          <p className={"text-text text-lg mb-6"}>
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </p>
          <button
            className={
              "border-2 border-otherSecond font-manrope font-bold text-xs px-8 py-3"
            }
          >
            READ MORE
          </button>
        </div>
        <div className={"w-[330px]"}>
          <img src="/img/services3.png" alt="services3" className={"mb-6"} />
          <h3 className={"font-playfair text-2xl font-bold mb-2"}>
            Hair & Beauty
          </h3>
          <p className={"text-text text-lg mb-6"}>
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </p>
          <button
            className={
              "border-2 border-otherSecond font-manrope font-bold text-xs px-8 py-3"
            }
          >
            READ MORE
          </button>
        </div>
        <div className={"w-[330px]"}>
          <img src="/img/services2.png" alt="services2" className={"mb-6"} />
          <h3 className={"font-playfair text-2xl font-bold mb-2"}>
            Body Treatments
          </h3>
          <p className={"text-text text-lg mb-6"}>
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </p>
          <button
            className={
              "border-2 border-otherSecond font-manrope font-bold text-xs px-8 py-3"
            }
          >
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

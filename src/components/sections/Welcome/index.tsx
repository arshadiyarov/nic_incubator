import React from "react";
import { BsPatchExclamationFill } from "react-icons/bs";

const Welcome = () => {
  return (
    <section>
      <div className={"py-[170px] bg-background1 bg-cover bg-no-repeat"}>
        <div className={"w-[1010px] mx-auto flex items-center gap-20"}>
          <div className={""}>
            <p
              className={
                "flex items-center gap-2 font-manrope font-medium text-otherSecond text-xs mb-2 "
              }
            >
              <BsPatchExclamationFill className={"text-sm"} /> WELCOME TO
              BEAUTYNESS!!!
            </p>
            <h2 className={"font-playfair text-6xl font-bold pb-6"}>
              Beauty is power a smile is its sword.
            </h2>
            <p className={"text-text mb-6"}>
              There are many variation of passages are Ipsum available, majority
              have suffered alteration in some form.
            </p>
            <button
              className={
                "bg-otherSecond px-6 py-3.5 font-manrope text-white text-[10px] font-semibold"
              }
            >
              MAKE A RESERVATION
            </button>
          </div>

          <img
            src="img/image1.png"
            alt="image1"
            width={450}
            height={450}
            className={"drop-shadow-[0_0_50px_rgba(0,0,0,0.4)]"}
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;

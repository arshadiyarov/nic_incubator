import React from "react";

const WhatIncludes = () => {
  return (
    <section className={"bg-primary"}>
      <div className={"w-[1010px] mx-auto flex items-center gap-20"}>
        <div className={"flex flex-col w-[420px]"}>
          <span className={"font-manrope font-bold text-xs text-otherSecond"}>
            What Includes?
          </span>
          <strong className={"font-playfair text-4xl font-bold w-[500px]"}>
            About the service
          </strong>
          <p className={"font-manrope text-text text-sm mt-3 leading-6"}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal these
            content here, making it look like readable English.
          </p>
          <h3 className={"font-playfair text-xl font-bold my-5"}>
            Our Methodology :
          </h3>
          <div className={"space-y-3"}>
            <div className={"flex items-start gap-4"}>
              <img src="/img/check-circle.svg" alt="check-circle" />
              <div>
                <h4 className={"font-semibold"}>The Assessment Stage</h4>
                <p className={"text-text text-sm"}>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal letters.
                </p>
              </div>
            </div>
            <div className={"flex items-start gap-4"}>
              <img src="/img/check-circle.svg" alt="check-circle" />
              <div>
                <h4 className={"font-semibold"}>The Assessment Stage</h4>
                <p className={"text-text text-sm"}>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal letters.
                </p>
              </div>
            </div>
            <div className={"flex items-start gap-4"}>
              <img src="/img/check-circle.svg" alt="check-circle" />
              <div>
                <h4 className={"font-semibold"}>The Assessment Stage</h4>
                <p className={"text-text text-sm"}>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal letters.
                </p>
              </div>
            </div>
          </div>
        </div>
        <video width={764.5} controls loop autoPlay>
          <source src="/img/videoPlaceholder1.mp4" />
        </video>
      </div>
    </section>
  );
};

export default WhatIncludes;

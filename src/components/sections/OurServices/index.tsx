import React from "react";

const OurServices = () => {
  return (
    <section className={"py-24"}>
      <div className={"w-[450px] mx-auto text-center mb-10"}>
        <span className={"font-manrope text-xs font-bold text-otherSecond"}>
          OUR SERVICES
        </span>
        <h3 className={"font-playfair text-3xl font-bold mt-2"}>
          We are Experienced in making you very Beautiful
        </h3>
      </div>
      <div className={"w-[900px] mx-auto relative"}>
        <div
          className={
            "absolute bg-background3 bg-no-repeat bg-cover top-[405px] right-[375px] w-[150px] h-[150px]"
          }
        ></div>
        <div className={"flex justify-between"}>
          <img
            src={"/img/ourServices1.png"}
            alt="ourServices1"
            width={450}
            className={"drop-shadow-[0_0_40px_rgba(0,0,0,0.3)]"}
          />
          <div>
            <div className={"mb-6"}>
              <div className={"border-b-2 py-4 border-opacity-30 border-other"}>
                <h4 className={"flex gap-3 font-playfair font-bold"}>
                  Face masks
                  <span className={"font-manrope"}>
                    .......................................
                  </span>
                  <span className={"font-manrope font-light text-text"}>
                    from
                  </span>
                  <span className={"font-semibold"}>$48.00</span>
                </h4>
                <p className={"text-sm"}>
                  The versions have evolved over the sometimes by accident.
                </p>
              </div>
              <div className={"border-b-2 py-4 border-opacity-30 border-other"}>
                <h4 className={"flex gap-3 font-playfair font-bold"}>
                  Full body massage
                  <span className={"font-manrope"}>
                    .............................
                  </span>
                  <span className={"font-manrope font-light text-text"}>
                    from
                  </span>
                  <span className={"font-semibold"}>$54.00</span>
                </h4>
                <p className={"text-sm"}>
                  The versions have evolved over the sometimes by accident.
                </p>
              </div>
              <div className={"border-b-2 py-4 border-opacity-30 border-other"}>
                <h4 className={"flex gap-3 font-playfair font-bold"}>
                  Geothermal spa
                  <span className={"font-manrope"}>
                    .................................
                  </span>
                  <span className={"font-manrope font-light text-text"}>
                    from
                  </span>
                  <span className={"font-semibold"}>$54.00</span>
                </h4>
                <p className={"text-sm"}>
                  The versions have evolved over the sometimes by accident.
                </p>
              </div>
              <div className={"border-b-2 py-4 border-opacity-30 border-other"}>
                <h4 className={"flex gap-3 font-playfair font-bold"}>
                  Sauna relax
                  <span className={"font-manrope"}>
                    .......................................
                  </span>
                  <span className={"font-manrope font-light text-text"}>
                    from
                  </span>
                  <span className={"font-semibold"}>$48.00</span>
                </h4>
                <p className={"text-sm"}>
                  The versions have evolved over the sometimes by accident.
                </p>
              </div>
            </div>
            <button
              className={
                "border-2 border-otherSecond text-xs font-bold font-manrope py-3 px-6"
              }
            >
              GET AN APPOINTMENT
            </button>
          </div>
        </div>

        <div className={"flex justify-between"}>
          <div>
            <div className={"mb-6 pt-20"}>
              <div className={"border-b-2 py-4 border-opacity-30 border-other"}>
                <h4 className={"flex gap-3 font-playfair font-bold"}>
                  Face masks
                  <span className={"font-manrope"}>
                    .......................................
                  </span>
                  <span className={"font-manrope font-light text-text"}>
                    from
                  </span>
                  <span className={"font-semibold"}>$48.00</span>
                </h4>
                <p className={"text-sm"}>
                  The versions have evolved over the sometimes by accident.
                </p>
              </div>
              <div className={"border-b-2 py-4 border-opacity-30 border-other"}>
                <h4 className={"flex gap-3 font-playfair font-bold"}>
                  Full body massage
                  <span className={"font-manrope"}>
                    .............................
                  </span>
                  <span className={"font-manrope font-light text-text"}>
                    from
                  </span>
                  <span className={"font-semibold"}>$54.00</span>
                </h4>
                <p className={"text-sm"}>
                  The versions have evolved over the sometimes by accident.
                </p>
              </div>
              <div className={"border-b-2 py-4 border-opacity-30 border-other"}>
                <h4 className={"flex gap-3 font-playfair font-bold"}>
                  Geothermal spa
                  <span className={"font-manrope"}>
                    .................................
                  </span>
                  <span className={"font-manrope font-light text-text"}>
                    from
                  </span>
                  <span className={"font-semibold"}>$54.00</span>
                </h4>
                <p className={"text-sm"}>
                  The versions have evolved over the sometimes by accident.
                </p>
              </div>
              <div className={"border-b-2 py-4 border-opacity-30 border-other"}>
                <h4 className={"flex gap-3 font-playfair font-bold"}>
                  Sauna relax
                  <span className={"font-manrope"}>
                    .......................................
                  </span>
                  <span className={"font-manrope font-light text-text"}>
                    from
                  </span>
                  <span className={"font-semibold"}>$48.00</span>
                </h4>
                <p className={"text-sm"}>
                  The versions have evolved over the sometimes by accident.
                </p>
              </div>
            </div>
            <button
              className={
                "border-2 border-otherSecond text-xs font-bold font-manrope py-3 px-6"
              }
            >
              GET AN APPOINTMENT
            </button>
          </div>

          <img
            src={"/img/ourServices2.png"}
            alt="ourServices1"
            width={450}
            className={"drop-shadow-[0_0_40px_rgba(0,0,0,0.3)]"}
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;

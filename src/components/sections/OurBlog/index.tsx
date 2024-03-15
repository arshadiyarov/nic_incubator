import React from "react";

const OurBlog = () => {
  return (
    <section className={"py-24"}>
      <div className={"w-[1010px] mx-auto"}>
        <div className={"text-center mb-10"}>
          <span className={"font-manrope font-bold text-xs text-otherSecond"}>
            OUR BLOG
          </span>
          <h3 className={"font-playfair text-4xl font-bold"}>Latest Updates</h3>
        </div>
        <div className={"flex justify-between"}>
          <div className={"w-[300px]"}>
            <img src="/img/ourBlog1.png" alt="ourBlog1" />
            <div className={"bg-primary px-5 py-6 flex flex-col gap-2"}>
              <div className={"flex items-center justify-between"}>
                <span className={"text-xs text-otherSecond font-bold"}>
                  11TH AUGUST 2021
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="2"
                  viewBox="0 0 20 2"
                  fill="none"
                >
                  <line
                    x1="0.213867"
                    y1="1"
                    x2="20"
                    y2="1"
                    stroke="#272D32"
                    stroke-width="2"
                  />
                </svg>
                <span className={"text-xs text-otherSecond font-bold"}>
                  BY PETER BERGSON
                </span>
              </div>
              <div className={"text-xl font-bold font-playfair"}>
                The energy efficiency of the hydrotherapy or swim
              </div>
              <div className={"text-text"}>
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </div>
            </div>
          </div>
          <div className={"w-[300px]"}>
            <img src="/img/ourBlog2.png" alt="ourBlog1" />
            <div className={"bg-primary px-5 py-6 flex flex-col gap-2"}>
              <div className={"flex items-center justify-between"}>
                <span className={"text-xs text-otherSecond font-bold"}>
                  11TH AUGUST 2021
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="2"
                  viewBox="0 0 20 2"
                  fill="none"
                >
                  <line
                    x1="0.213867"
                    y1="1"
                    x2="20"
                    y2="1"
                    stroke="#272D32"
                    stroke-width="2"
                  />
                </svg>
                <span className={"text-xs text-otherSecond font-bold"}>
                  BY PETER BERGSON
                </span>
              </div>
              <div className={"text-xl font-bold font-playfair"}>
                Tips to improve your body via cleansing
              </div>
              <div className={"text-text"}>
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </div>
            </div>
          </div>
          <div className={"w-[300px]"}>
            <img src="/img/ourBlog3.png" alt="ourBlog1" />
            <div className={"bg-primary px-5 py-6 flex flex-col gap-2"}>
              <div className={"flex items-center justify-between"}>
                <span className={"text-xs text-otherSecond font-bold"}>
                  11TH AUGUST 2021
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="2"
                  viewBox="0 0 20 2"
                  fill="none"
                >
                  <line
                    x1="0.213867"
                    y1="1"
                    x2="20"
                    y2="1"
                    stroke="#272D32"
                    stroke-width="2"
                  />
                </svg>
                <span className={"text-xs text-otherSecond font-bold"}>
                  BY PETER BERGSON
                </span>
              </div>
              <div className={"text-xl font-bold font-playfair"}>
                Experience the beauty at our beauty spa
              </div>
              <div className={"text-text"}>
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </div>
            </div>
          </div>
        </div>
        <div className={"text-center"}>
          <button
            className={
              "border-2 border-otherSecond text-xs font-bold font-manrope py-3 px-6 mt-10"
            }
          >
            VIEW MORE STORIES
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;

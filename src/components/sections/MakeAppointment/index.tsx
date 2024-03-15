import React from "react";
import SectionHeader from "@/components/SectionHeader";

const MakeAppointment = () => {
  return (
    <section className={"py-24 bg-primary"}>
      <div className={"w-[800px] mx-auto"}>
        <div>
          <SectionHeader
            title={"SCHEDULE YOUR PRESENCE"}
            body={"Make an Appointment"}
          />
          <p className={"text-center text-text mt-5 mx-auto w-[525px]"}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div
          className={
            "bg-white py-14 mt-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
          }
        >
          <form action="" className={"flex justify-center gap-2"}>
            <div className={"space-y-3"}>
              <div className={"border border-other flex gap-3 p-3 w-[325px]"}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#5C8692"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#5C8692"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  type="text"
                  placeholder={"Name"}
                  className={"outline-none"}
                />
              </div>
              <div className={"border border-other flex gap-3 p-3 w-[325px]"}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.0004 16.9201V19.9201C22.0016 20.1986 21.9445 20.4743 21.8329 20.7294C21.7214 20.9846 21.5577 21.2137 21.3525 21.402C21.1473 21.5902 20.905 21.7336 20.6412 21.8228C20.3773 21.912 20.0978 21.9452 19.8204 21.9201C16.7433 21.5857 13.7874 20.5342 11.1904 18.8501C8.77425 17.3148 6.72576 15.2663 5.19042 12.8501C3.5004 10.2413 2.44866 7.27109 2.12042 4.1801C2.09543 3.90356 2.1283 3.62486 2.21692 3.36172C2.30555 3.09859 2.44799 2.85679 2.63519 2.65172C2.82238 2.44665 3.05023 2.28281 3.30421 2.17062C3.5582 2.05843 3.83276 2.00036 4.11042 2.0001H7.11042C7.59573 1.99532 8.06621 2.16718 8.43418 2.48363C8.80215 2.80008 9.0425 3.23954 9.11042 3.7201C9.23704 4.68016 9.47187 5.62282 9.81042 6.5301C9.94497 6.88802 9.97408 7.27701 9.89433 7.65098C9.81457 8.02494 9.62928 8.36821 9.36042 8.6401L8.09042 9.9101C9.51398 12.4136 11.5869 14.4865 14.0904 15.9101L15.3604 14.6401C15.6323 14.3712 15.9756 14.1859 16.3495 14.1062C16.7235 14.0264 17.1125 14.0556 17.4704 14.1901C18.3777 14.5286 19.3204 14.7635 20.2804 14.8901C20.7662 14.9586 21.2098 15.2033 21.527 15.5776C21.8441 15.9519 22.0126 16.4297 22.0004 16.9201Z"
                    stroke="#5C8692"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  type="text"
                  placeholder={"Phone"}
                  className={"outline-none"}
                />
              </div>
              <div className={"border border-other flex gap-3 p-3 w-[325px]"}>
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.042 3.83398H4.33366C3.82533 3.83398 3.33782 4.03592 2.97837 4.39536C2.61893 4.75481 2.41699 5.24232 2.41699 5.75065V19.1673C2.41699 19.6756 2.61893 20.1632 2.97837 20.5226C3.33782 20.882 3.82533 21.084 4.33366 21.084H17.7503C18.2587 21.084 18.7462 20.882 19.1056 20.5226C19.4651 20.1632 19.667 19.6756 19.667 19.1673V12.459"
                    stroke="#5C8692"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.2295 2.39621C18.6107 2.01496 19.1278 1.80078 19.667 1.80078C20.2062 1.80078 20.7232 2.01496 21.1045 2.39621C21.4857 2.77746 21.6999 3.29455 21.6999 3.83371C21.6999 4.37288 21.4857 4.88996 21.1045 5.27121L12.0003 14.3754L8.16699 15.3337L9.12533 11.5004L18.2295 2.39621Z"
                    stroke="#5C8692"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input type="text" placeholder={"Any Note For Us"} />
              </div>
            </div>
            <div className={"space-y-3"}>
              <div className={"border border-other flex gap-3 p-3 w-[325px]"}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="#5C8692"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="#5C8692"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  type="email"
                  placeholder={"Email"}
                  className={"outline-none"}
                />
              </div>

              <div className={"border border-other flex gap-3 p-3 w-[325px]"}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                    stroke="#5C8692"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                    stroke="#5C8692"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  type="text"
                  placeholder={"Service You Need"}
                  className={"outline-none"}
                />
              </div>
              <button
                className={
                  "bg-otherSecond text-xs text-white font-bold font-manrope py-4 px-6 w-full border border-otherSecond"
                }
              >
                GET AN APPOINTMENT
              </button>
            </div>
          </form>
          <p
            className={
              "text-other text-sm font-manrope w-[350px] text-center mx-auto mt-6"
            }
          >
            Your personal information will not be passed on to any third
            parties. please read our{" "}
            <span className={"font-semibold"}>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;

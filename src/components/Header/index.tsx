"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [hover, setHover] = useState(false);

  // const handlehover = () => {
  //   setHover(true);
  // };

  return (
    <header>
      <div className="flex items-center justify-between w-[1450px] mx-auto py-6">
        <div className={"flex items-center gap-10"}>
          <Link
            href="/"
            className={
              "flex items-center gap-2 font-playfair text-2xl font-bold"
            }
          >
            <img src="/img/logo.svg" alt="logo" />
            Beautyness
          </Link>
          <Link
            href="tel:+221234567890"
            className={"flex items-center gap-2 font-medium"}
          >
            <img src="/img/call.svg" alt="call" />
            Call Us - (+22) 123 456 7890
          </Link>
        </div>

        <div className={"flex items-center gap-8 relative"}>
          <ul className={"flex items-center gap-8 text-text"}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Link href="" className={"flex items-center relative"}>
                Pages{" "}
                <IoIosArrowDown className={"absolute -right-4 bottom-0.5"} />
              </Link>
              {hover && (
                <div
                  className={
                    "absolute top-8 left-7 bg-white border text-center flex flex-col"
                  }
                >
                  <Link
                    href={"/"}
                    className={"border px-8 py-1 hover:bg-primary"}
                  >
                    Home
                  </Link>
                  <Link
                    href={"/about"}
                    className={"border px-8 py-1 hover:bg-primary"}
                  >
                    About Us
                  </Link>
                  <Link
                    href={"/services"}
                    className={"border px-8 py-1 hover:bg-primary"}
                  >
                    Services
                  </Link>
                  <Link
                    href={"/contact"}
                    className={"border px-8 py-1 hover:bg-primary"}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="services">Services</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
          </ul>

          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebookF />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <FaTwitter />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn />
          </Link>

          <Link
            href={"/services-single"}
            className={
              "flex items-center gap-2 bg-other py-2.5 px-6 text-white font-manrope text-[11px] font-semibold"
            }
          >
            <img src="/img/reservation-icon.svg" alt="reservation-icon" />
            RESERVATION
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

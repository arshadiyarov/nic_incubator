import React from "react";
import Link from "next/link";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={"text-white"}>
      <div className={"bg-secondary"}>
        <div className={"w-[1010px] mx-auto text-white bg-secondary"}>
          <div
            className={"flex justify-between py-10  border-b border-gray-600"}
          >
            <Link
              href="/public"
              className={
                "flex items-center gap-2 font-playfair text-4xl font-bold"
              }
            >
              <img src="/img/logo.svg" alt="logo" width={50} />
              Beautyness
            </Link>
            <div className={"flex gap-2"}>
              <button className={"border-2 py-3 px-4 border-other"}>
                <FaFacebookF />
              </button>
              <button className={"border-2 py-3 px-4 border-other"}>
                <FaLinkedinIn />
              </button>

              <button className={"border-2 py-3 px-4 border-other"}>
                <FaTwitter />
              </button>

              <button className={"border-2 py-3 px-4 border-other"}>
                <FaInstagram />
              </button>
            </div>
          </div>
          <div className={"py-10 flex justify-between"}>
            <div className={"space-y-3"}>
              <span className={"font-playfair text-xl font-bold"}>Explore</span>
              <ul className={"space-y-1"}>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about-us"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/services"}>Services</Link>
                </li>
                <li>
                  <Link href={"/appointments"}>Appointments</Link>
                </li>
                <li>
                  <Link href={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link href={"/contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className={"space-y-3"}>
              <span className={"font-playfair text-xl font-bold"}>
                Utility Pages
              </span>
              <ul className={"space-y-1"}>
                <li>
                  <Link href={"/start-here"}>Start Here</Link>
                </li>
                <li>
                  <Link href={"/styles-guide"}>Styles Guide</Link>
                </li>
                <li>
                  <Link href={"/not-found"}>404 not found</Link>
                </li>
                <li>
                  <Link href={"/password-protected"}>Password Protected</Link>
                </li>
                <li>
                  <Link href={"/licenses"}>Licenses</Link>
                </li>
                <li>
                  <Link href={"/changelog"}>Changelog</Link>
                </li>
              </ul>
            </div>
            <div className={"space-y-3"}>
              <span className={"font-playfair text-xl font-bold"}>
                Keep in Touch
              </span>
              <ul className={"space-y-1"}>
                <li className={"flex justify-between"}>
                  <span>Address:</span>
                  <div>24A Kingston St, Los Vegas NC 28202, USA.</div>
                </li>
                <li className={"flex justify-between"}>
                  <span>Mail:</span>
                  <div>support@doctors.com</div>
                </li>
                <li className={"flex justify-between"}>
                  <span>Phone:</span>
                  <div>(+22) 123 - 4567 - 900</div>
                </li>
              </ul>
            </div>
            <div className={"space-y-3"}>
              <span className={"font-playfair text-xl font-bold"}>
                Working Hours
              </span>
              <ul className={"space-y-1"}>
                <li>Mon to Fri: 7am - 6pm</li>
                <li>Sat: 9am - 7pm</li>
                <li>Sun: 9am - 6pm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg-copy text-center py-5"}>
        &copy; Copyright 2021. Drafted by Armat Shadiyarov.
      </div>
    </footer>
  );
};

export default Footer;

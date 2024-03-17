import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ExpertCardProps } from "@/components/ExpertCard/ExpertCardProps";

const ExpertCard: React.FC<ExpertCardProps> = ({
  src,
  fullName,
  body,
  sphere,
  facebook,
  twitter,
  linkedIn,
}) => {
  return (
    <div className={"w-[300px] space-y-4"}>
      <img src={src} alt="expert1" />
      <div className={"text-center"}>
        <strong className={"font-playfair text-xl"}>{fullName}</strong>
        <p className={"text-other mb-1 text-sm font-medium"}>{sphere}</p>
        <p className={"text-text"}>{body}</p>
      </div>
      <div className={"flex justify-between w-24 mx-auto"}>
        <Link href={facebook}>
          <FaFacebookF />
        </Link>
        <Link href={twitter}>
          <FaTwitter />
        </Link>
        <Link href={linkedIn}>
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default ExpertCard;

import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { CouponCardProps } from "@/components/CouponCard/CouponCardProps";

const CouponCard: React.FC<CouponCardProps> = ({ email, phone, discount }) => {
  return (
    <div className={"flex"}>
      <div
        className={
          "flex flex-col justify-between bg-white border border-other px-6 py-4"
        }
      >
        <div className={"flex gap-3 mb-2"}>
          <RxDotsHorizontal className={"text-3xl text-otherSecond"} />
          <div className={"font-manrope"}>
            <div className={"text-sm font-bold"}>MAIL US :</div>
            <div className={"text-sm font-semibold"}>{email}</div>
          </div>
        </div>
        <div className={"flex gap-3"}>
          <RxDotsHorizontal className={"text-3xl text-otherSecond"} />
          <div className={"font-manrope"}>
            <div className={"text-sm font-bold"}>CALL US :</div>
            <div className={"text-sm font-semibold"}>{phone}</div>
          </div>
        </div>
      </div>
      <div
        className={"bg-secondary text-white px-6 py-3 font-manrope text-center"}
      >
        <div className={"font-semibold"}>- GET FLAT -</div>
        <div className={"text-6xl font-bold"}>
          {discount}
          <span className={"text-3xl font-light"}>%</span>
        </div>
        <div className={"font-semibold"}>Discount</div>
      </div>
    </div>
  );
};

export default CouponCard;

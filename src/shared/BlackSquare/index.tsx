import React from "react";
import { BlackSquareProps } from "@/shared/BlackSquare/BlackSquareProps";

const BlackSquare: React.FC<BlackSquareProps> = ({ styles }) => {
  return (
    <div
      className={`absolute bg-background3 bg-no-repeat bg-cover -z-10 ${styles}`}
    ></div>
  );
};

export default BlackSquare;

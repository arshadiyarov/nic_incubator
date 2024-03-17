import { ButtonFillProps } from "@/shared/ButtonFill/ButtonFillProps";

const ButtonFill: React.FC<ButtonFillProps> = ({ text, styles }) => {
  return (
    <button
      className={`bg-otherSecond px-6 py-3.5 font-manrope text-white text-[10px] font-semibold ${styles}`}
    >
      {text}
    </button>
  );
};

export default ButtonFill;

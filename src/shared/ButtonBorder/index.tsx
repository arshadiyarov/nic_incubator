import { ButtonBorderProps } from "@/shared/ButtonBorder/ButtonBorderProps";

const ButtonBorder: React.FC<ButtonBorderProps> = ({ text, styles }) => {
  return (
    <button
      className={`border-2 border-otherSecond font-manrope font-bold text-xs px-8 py-3 ${styles}`}
    >
      {text}
    </button>
  );
};

export default ButtonBorder;

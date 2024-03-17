import { ShortSectionProps } from "@/shared/ShortSectionTitle/ShortSectionProps";

const ShortSectionTitle: React.FC<ShortSectionProps> = ({ text, styles }) => {
  return (
    <p className={`font-manrope font-bold text-otherSecond text-xs ${styles}`}>
      {text}
    </p>
  );
};

export default ShortSectionTitle;

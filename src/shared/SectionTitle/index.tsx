import { SectionTitleProps } from "@/shared/SectionTitle/SectionTitleProps";

const SectionTitle: React.FC<SectionTitleProps> = ({ text, styles }) => {
  return (
    <h2 className={`font-playfair text-4xl font-bold ${styles}`}>{text}</h2>
  );
};

export default SectionTitle;

import { AboutUsSectionCardProps } from "@/components/AboutUsSectionCard/AboutUsSectionCardProps";

const AboutUsSectionCard: React.FC<AboutUsSectionCardProps> = ({
  text,
  src,
}) => {
  return (
    <div
      className={
        "flex flex-col items-center border border-black bg-white w-[145px] py-4"
      }
    >
      <img src={src} alt="aboutUsIcon1" />
      <h2 className={"font-playfair text-center font-bold text-2xl mt-2"}>
        {text}
      </h2>
    </div>
  );
};

export default AboutUsSectionCard;

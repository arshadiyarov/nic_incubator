import { ServicesCardProps } from "@/components/ServicesCard/ServicesCardProps";
import ButtonBorder from "@/shared/ButtonBorder";

const ServicesCard: React.FC<ServicesCardProps> = ({
  src,
  title,
  body,
  styles,
}) => {
  return (
    <div className={`w-[330px] ${styles}`}>
      <img src={src} alt="services1" className={"mb-6"} />
      <h3 className={"font-playfair text-2xl font-bold mb-2"}>{title}</h3>
      <p className={"text-text text-lg mb-6"}>{body}</p>
      <ButtonBorder text={"READ MORE"} />
    </div>
  );
};

export default ServicesCard;

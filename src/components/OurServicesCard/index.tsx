import BlackSquare from "@/shared/BlackSquare";
import { OurServicesCardProps } from "@/components/OurServicesCard/OurServicesCardProps";
import OurServicesCardMenu from "@/widgets/OurServicesCardMenu";

const OurServicesCard: React.FC<OurServicesCardProps> = ({
  src,
  isLeft = false,
}) => {
  return (
    <div className={"relative flex justify-between"}>
      {!isLeft && (
        <>
          <BlackSquare
            styles={"top-[405px] right-[375px] w-[150px] h-[150px]"}
          />
          <img
            src={src}
            alt="ourServices1"
            width={450}
            className={"drop-shadow-[0_0_40px_rgba(0,0,0,0.3)]"}
          />
        </>
      )}
      <OurServicesCardMenu isLeft={isLeft} />
      {isLeft && (
        <img
          src={src}
          alt="ourServices1"
          width={450}
          className={"drop-shadow-[0_0_40px_rgba(0,0,0,0.3)]"}
        />
      )}
    </div>
  );
};

export default OurServicesCard;

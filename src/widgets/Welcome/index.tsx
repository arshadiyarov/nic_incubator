import { BsPatchExclamationFill } from "react-icons/bs";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import SectionDescription from "@/shared/SectionDescription";
import ButtonFill from "@/shared/ButtonFill";

const Welcome = () => {
  return (
    <section>
      <div className={"py-[170px] bg-background1 bg-cover bg-no-repeat"}>
        <div className={"w-[1010px] mx-auto flex items-center gap-20"}>
          <div className={"space-y-3"}>
            <div className={"flex gap-1"}>
              <BsPatchExclamationFill className={"text-sm text-otherSecond"} />
              <ShortSectionTitle text={"WELCOME TO BEAUTYNESS!!!"} />
            </div>
            <SectionTitle
              text={"Beauty is power a smile is its sword."}
              styles={"text-6xl"}
            />
            <SectionDescription
              text={
                "There are many variation of passages are Ipsum available, majority have suffered alteration in some form."
              }
            />
            <ButtonFill text={"MAKE A RESERVATION"} />
          </div>
          <img
            src="img/image1.png"
            alt="image1"
            width={450}
            height={450}
            className={"drop-shadow-[0_0_50px_rgba(0,0,0,0.4)]"}
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;

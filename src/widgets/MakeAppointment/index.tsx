import React from "react";
import ShortSectionTitle from "@/shared/ShortSectionTitle";
import SectionTitle from "@/shared/SectionTitle";
import SectionDescription from "@/shared/SectionDescription";
import AppointmentFormWide from "@/components/AppointmentFormWide";

const MakeAppointment = () => {
  return (
    <section className={"py-24 bg-primary"}>
      <div className={"w-[800px] mx-auto"}>
        <div className={"space-y-3"}>
          <ShortSectionTitle
            text={"SCHEDULE YOUR PRESENCE"}
            styles={"text-center"}
          />
          <SectionTitle text={"Make an Appointment"} styles={"text-center"} />
          <SectionDescription
            text={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            }
            styles={"text-center w-[550px] mx-auto"}
          />
        </div>
        <AppointmentFormWide />
      </div>
    </section>
  );
};

export default MakeAppointment;

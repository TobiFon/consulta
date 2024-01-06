import React from "react";
import Specialitist from "./Specialitist";

const SpecialtistSection = () => {
  return (
    <div className=" bg-orange-50 flex flex-col items-center my-10 space-y-10">
      <h2 className=" text-3xl font-semibold tracking-tight mt-10 text-center">
        Our consulting specialitist
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-2xl text-center">
        ask a doctor online and get quick medical advice for your health
        queries. Our medical panel consists of over 3500+ doctors from over 80+
        specialitist
      </p>
      <div>
        <Specialitist />
      </div>
    </div>
  );
};

export default SpecialtistSection;

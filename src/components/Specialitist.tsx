import Image from "next/image";
import React from "react";

const Specialitist = () => {
  const SpecialitistList = [
    { name: "Dermatology", img: "/Med/skin.png" },
    { name: "Internal Medicine", img: "/Med/kidney.png" },
    { name: "Neurology", img: "/Med/neurology.png" },
    { name: "General Medicine", img: "/Med/medicine.png" },
    { name: "Dentistry", img: "/Med/dentist.png" },
    { name: "Otolaryngology", img: "/Med/hearing-aid.png" },
    { name: "HIV/AIDS", img: "/Med/red-ribbon.png" },
    { name: "Urology", img: "/Med/urology.png" },
    { name: "Allergy", img: "/Med/anaphylaxis.png" },
    { name: "Paediatrics", img: "/Med/healthcare.png" },
    { name: "Gastroenterology", img: "/Med/stomach.png" },
    { name: "Infectious Disease", img: "/Med/coronavirus.png" },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {SpecialitistList.map((speciality, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <Image
            src={speciality.img}
            alt="specility image"
            height={50}
            width={50}
          />
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {speciality.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Specialitist;

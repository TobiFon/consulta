import Image from "next/image";
import React from "react";
import Faqs from "./Faqs";

const FaqsSection = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center my-10 space-y-10 text-center">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        Frequently Asked Questions
      </h2>

      <div className="xl:flex gap-20 items-center justify-center">
        <div className=" relative h-96 w-96 bg-gradient-to-br rounded-full from-slate-50 to-red-600 overflow-hidden">
          <Image
            src={"/6.png"}
            alt="faqs question"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className=" lg:w-[36rem] w-[24rem]">
          <Faqs />
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;

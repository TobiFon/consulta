import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" bg-orange-50">
      <div className="container flex-col xl:flex-row flex gap-10 justify-center  items-center pt-10 text-center lg:text-left">
        <div className=" md:max-w-xl space-y-7">
          <h1 className=" tracking-loose text-4xl font-extrabold lg:text-5xl">
            Consult a doctor anytime, anywhere by{" "}
            <span className="underline text-purple-800">video call</span>
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Talk with a doctor using our highly secured HIPAA complaint
            end-to-end encrypted video call
          </p>

          <div className="flex gap-3 md:gap-5 items-center justify-center lg:justify-start flex-row ">
            <Button className=" shadow-md">Ask A Doctor Online</Button>
            <Button className=" shadow-md" variant={"secondary"}>
              Unlimited Chat
            </Button>
          </div>
        </div>
        <div>
          <div className="relative h-[400px] md:w-[500px] w-[300px]">
            <Image
              alt="hero image"
              src={"/1.png"}
              fill
              className=" object-cover object-center z-0"
            />
            <div className=" md:w-44 w-28 h-12 bg-white absolute top-14 -left-10 md:left-0 flex items-center p-1 md:space-x-2">
              <div className=" bg-green-200 h-4 w-4 rounded-full flex items-center justify-center">
                <div className=" bg-green-600 h-2 w-2 rounded-full"></div>
              </div>

              <small className="text-sm font-medium leading-none">
                100+ doctors online
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { RadioGroupForm } from "./RadioGroup";
import { Toaster } from "./ui/toaster";

const ChatSection = () => {
  return (
    <div className=" w-full flex flex-col-reverse lg:flex-row items-center lg:gap-52 gap-10 container my-10 space-y-10 mt-20">
      <div className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px]  bg rounded-full flex items-center justify-center bg-gradient-to-br from-white to-orange-100 shrink-0">
        <Image
          fill
          alt="chat image"
          src="/2.png"
          className=" object-cover object-center"
        />
        <div className=" bg-purple-950 text-orange-200 rounded-lg px-2 py-4 hidden lg:block w-60 space-y-4 absolute -top-8 -right-40">
          <div className=" flex gap-2 justify-center items-center">
            <Avatar className=" w-14 h-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="leading-7 text-xs">
              Hello, not feeling too well from fever for 2 days
            </p>
          </div>
          <div className=" flex flex-row-reverse gap-2 justify-center items-center">
            <Avatar className=" w-14 h-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="leading-7 text-xs">
              Hello, not feeling too well from fever for 2 days
            </p>
          </div>
          <div className=" flex gap-2 justify-center items-center">
            <Avatar className=" w-14 h-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="leading-7 text-xs ">
              Hello, not feeling too well from fever for 2 days
            </p>
          </div>
        </div>
      </div>
      <div className=" max-w-xl space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
          Start an online chat consultation with a doctor.
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Post unlimited follow ups to the doctor for the next 50 or 100 hours
          by choosing one of our chat services, easily accessible via our
          comprehensive online consultation app valiable both in android and IOS
        </p>
        <RadioGroupForm />
        <Toaster />
      </div>
    </div>
  );
};

export default ChatSection;

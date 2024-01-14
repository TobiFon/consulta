import React from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface StateProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ setIsOpen }: StateProps) => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "services" },
    { name: "FAQ", href: "faq" },
    { name: "Consutation", href: "consultation" },
    { name: "Articles", href: "articles" },
  ];
  return (
    <div className=" w-full right-0 left-0 h-full fixed top-0 bottom-0  bg-purple-950 text-orange-200 z-50">
      <Button
        className=" text-orange-200 fixed top-4 right-6"
        variant={"ghost"}
      >
        <X className="" size={30} onClick={() => setIsOpen(false)} />
      </Button>
      <div className=" flex flex-col gap-5 text-2xl justify-center items-center mt-24 sm:h-full pb-32">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={index}>
            {link.name}
          </Link>
        ))}
        <div className=" absolute bottom-5 text-base space-y-4">
          <div className=" flex flex-col justify-center items-center">
            <p className="leading-7 ">Call Now</p>
            <p className="leading-7 ">(+237)-675555555</p>
          </div>
          <Button className=" bg-slate-50 text-purple-950">
            Send a Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

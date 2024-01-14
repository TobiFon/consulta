"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import SideBar from "./SideBar";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "services" },
    { name: "FAQ", href: "faq" },
    { name: "Consutation", href: "consultation" },
    { name: "Articles", href: "articles" },
  ];
  return (
    <div className=" bg-orange-50">
      <div className="flex justify-between items-center h-[7vh] border-b-2 border-purple-950 px-5 lg:px-10 container z-10">
        <div className="relative">Consulta</div>
        <div className="xl:flex gap-4 hidden ">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="xl:flex gap-6 justify-center items-center hidden">
          <div className="flex flex-col gap-1 ">
            <small className="text-sm font-medium leading-none">Call Now</small>
            <small className="text-sm font-medium leading-none">
              (+237)-675555555
            </small>
          </div>
          <Button className=" bg-purple-950 text-orange-200 p-5">
            {" "}
            Send a Message
          </Button>
        </div>
        <div className="xl:hidden">
          <Button
            className=""
            variant={"ghost"}
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </Button>
        </div>
        {isOpen && <SideBar setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default NavBar;

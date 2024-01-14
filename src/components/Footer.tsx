import React from "react";
import { Button } from "./ui/button";
import { Apple, Playstore } from "../../public";
import Link from "next/link";

const Footer = () => {
  const linksList1 = [
    "Ask a doctor online",
    "chat with a doctor",
    "phone a doctor",
    "phone a doctor",
    "Video consulting",
    "Online covid Care",
    "site map",
    "physician directory",
    "book a lab test",
    "MRI/CT scan",
    "Articles",
  ];

  const linksList2 = [
    "Tools, FAQs",
    "Blogs",
    "Careers",
    "About Us",
    "Terms",
    "privacy",
    "ads-policy",
    "press",
  ];

  const linksList3 = [
    "Get docs app",
    "Get api",
    "Get widgets",
    "Medical review team",
    "Symtopm chacker",
    "Deals and offers",
    "support",
    "help",
  ];

  const linksList4 = [
    "for employees",
    "for telegram",
    "for sick teams",
    "for MS team",
    "Success Stories",
    "#consulta100",
    "Medical cases",
    "Contacts",
  ];

  return (
    <div className=" bg-gradient-to-r from-orange-50 to-orange-100 py-10 mt-20 px-5 flex flex-col justify-center items-center">
      <div className=" grid xl:grid-cols-2 gap-10 ">
        <div className=" space-y-5">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            CONSULTA
          </h3>
          <p className="leading-7 ">
            Talk to a doctor using our highly secured end to end encryption
          </p>

          <div className="flex gap-4 flex-col ">
            <Button size={"lg"} className=" rounded-3xl shadow-lg py-8 ">
              <div className="flex gap-4  items-center justify-center">
                <Apple />
                <div>
                  <p className="leading-7 ">Download on the</p>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Apple Store
                  </h4>
                </div>
              </div>
            </Button>
            <Button
              size={"lg"}
              variant={"secondary"}
              className=" py-8  rounded-3xl shadow-lg"
            >
              <div className="flex gap-4 items-center justify-center">
                <Playstore />
                <div>
                  <p className="leading-7 ">Get it from</p>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Google Play
                  </h4>
                </div>
              </div>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
          <div>
            {linksList1.map((link, index) => (
              <Link href={"#"} key={index} className="flex flex-col gap-3">
                <p className="leading-7 [&:not(:first-child)]:mt-6">{link}</p>
              </Link>
            ))}
          </div>
          <div>
            {linksList2.map((link, index) => (
              <Link href={"#"} key={index} className="flex flex-col gap-3">
                <p className="leading-7 [&:not(:first-child)]:mt-6">{link}</p>
              </Link>
            ))}
          </div>
          <div>
            {linksList3.map((link, index) => (
              <Link href={"#"} key={index} className="flex flex-col gap-3">
                <p className="leading-7 [&:not(:first-child)]:mt-6">{link}</p>
              </Link>
            ))}
          </div>
          <div>
            {linksList4.map((link, index) => (
              <Link href={"#"} key={index} className="flex flex-col gap-3">
                <p className="leading-7 [&:not(:first-child)]:mt-6">{link}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

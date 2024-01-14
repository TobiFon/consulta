"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { MoreVertical } from "lucide-react";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { link } from "fs";
import Link from "next/link";

const Articles = () => {
  const articlesList = [
    {
      img: "/3.jpg",
      title: "How to dicrease the level of adipose in the body",
      description:
        "serum or blood creatione gives an idea about renal health. Creatine phosphate is mande with 3 different types of amino acids such as arginine and glutine and methionine",
      doctor: "Dr meharab",
      spciciality: "Health and food",
      date: "2017-3-3",
      likes: 233,
      views: 3243,
    },
    {
      img: "/4.jpg",
      title: "Covid-19 vaccines and people with chronic conditions",
      description:
        "serum or blood creatione gives an idea about renal health. Creatine phosphate is mande with 3 different types of amino acids such as arginine and glutine and methionine",
      doctor: "Dr meharab",
      spciciality: "Health and food",
      date: "2017-3-3",
      likes: 233,
      views: 3243,
    },
    {
      img: "/5.jpg",
      title: "Current state of disparity in neurology and neurologic training",
      description:
        "serum or blood creatione gives an idea about renal health. Creatine phosphate is mande with 3 different types of amino acids such as arginine and glutine and methionine",
      doctor: "Dr meharab",
      spciciality: "Health and food",
      date: "2017-3-3",
      likes: 233,
      views: 3243,
    },
  ];
  return (
    <div className=" grid xl:grid-cols-3 gap-5 container items-center justify-center lg:grid-cols-2">
      {articlesList.map((article, index) => (
        <Link
          href={"#"}
          key={index}
          className="flex flex-col gap-6 items-center justify-center  max-w-xl text-left"
        >
          <div className="relative h-80 w-96">
            <Image
              src={article.img}
              alt="article image"
              fill
              className=" object-cover object-center"
            />
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {article.title}
          </h3>
          <p className="leading-7  border-b-2 border-purple-950 pb-6">
            {article.description}
          </p>
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-3 items-center justify-center">
              <Avatar className=" h-14 w-14">
                <AvatarImage src="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {article.doctor}
                </h4>
                <small className="text-sm font-medium leading-none">
                  {article.spciciality}
                </small>
              </div>
            </div>
            <Button variant={"link"}>
              <MoreVertical />
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Articles;

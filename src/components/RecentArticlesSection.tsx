import React from "react";
import Articles from "./Articles";
import { Button } from "./ui/button";

const RecentArticlesSection = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center my-10 space-y-10 text-center">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        Recent Articles
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-md">
        Browse through some of our latest health articles for the latest news
        and imformation around health
      </p>
      <Articles />
      <Button className=" px-10 text-xl" size={"lg"}>
        Read more articles
      </Button>
    </div>
  );
};

export default RecentArticlesSection;

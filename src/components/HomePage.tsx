import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ChatSection from "./ChatSection";
import SpecialtistSection from "./SpecialtistSection";
import RecentArticlesSection from "./RecentArticlesSection";
import FaqsSection from "./FaqsSection";

const HomePage = () => {
  return (
    <div className=" space-y-20">
      <HeroSection />
      <AboutSection />
      <ChatSection />
      <SpecialtistSection />
      <RecentArticlesSection />
      <FaqsSection />
    </div>
  );
};

export default HomePage;

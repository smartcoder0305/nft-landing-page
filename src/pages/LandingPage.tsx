// imports
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Future from "../components/LandingPage/Future";
import FeaturedNFT from "../components/LandingPage/FeaturedNFT";
import WhatIsNFTRich from "../components/LandingPage/WhatIsNFTRich/WhatIsNFTRich";
import JoinNFTRich from "../components/LandingPage/JoinNFTRich/JoinNFTRich";
import JoinNow from "../components/LandingPage/JoinNow";
import FrequentQuestions from "../components/LandingPage/FrequentQuestions/FrequentQuestions";
import bgImg from "../assets/svg/bgimg.svg";

// LandingPage
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="mt-20">
        <Future />
        <FeaturedNFT />
        <WhatIsNFTRich />
        <JoinNFTRich />
        <JoinNow />
        <FrequentQuestions />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

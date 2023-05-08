// imports
import React from "react";
import SectionCard from "./SectionCard";
import SectionDivider from "./SectionDivider";
import puzzleIcon from "../../../assets/img/puzzle.png";
import messagesIcon from "../../../assets/img/messages.png";
import lockIcon from "../../../assets/img/lock.png";

// WhatIsNFTRich
const WhatIsNFTRich = () => {
  return (
    <div id="about" className="w-full flex flex-col text-center py-20 px-12">
      <div>
        <p className="inline-block font-clashGrotesk font-semibold text-transparent text-2xl md:text-4xl bg-gradient-to-r from-magenta via-lavender to-babyBlue bg-clip-text">
          What is NFTRich?
        </p>
      </div>
      <div className="font-plusJakartaSans text-white text-sm md:text-lg text-gray-200 font-light">
        NFTRich is a revolutionary platform that lets you gamble your NFTs for a
        chance to win big. Our platform provides a new utility for NFTs, opening
        up a new way of gambling in the crypto space.
      </div>
      <div className="mt-10 md:flex">
        <SectionCard title="Get Free NFTs" icon={puzzleIcon}>
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </SectionCard>
        <SectionDivider />
        <SectionCard title="Secured & Safe Payments" icon={lockIcon}>
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </SectionCard>
        <SectionDivider />
        <SectionCard title="24/7 Customer Support" icon={messagesIcon}>
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </SectionCard>
      </div>
    </div>
  );
};

export default WhatIsNFTRich;

// imports
import React from "react";
import { SectionCard } from "./SectionCard";
import joinNFTRich1 from "../../../assets/img/nft-mark.png";
import joinNFTRich2 from "../../../assets/img/nft-sign.png";
import joinNFTRich3 from "../../../assets/img/gallery-img.png";
import joinNFTRich4 from "../../../assets/img/nft-cards.png";

// JoinNFTRich
const JoinNFTRich = () => {
  return (
    <div id="join" className="w-full flex flex-col text-center py-20 px-12">
      <div>
        <p className="inline-block font-clashGrotesk font-semibold text-transparent text-2xl md:text-4xl leading-7 bg-gradient-to-r from-magenta via-lavender to-babyBlue bg-clip-text">
          Join NFTRich, gamble NFTs, win big!
        </p>
      </div>
      <div className="font-plusJakartaSans text-white text-sm px-12 md:text-lg text-gray-200 font-light">
        To get started, simply create an account on our platform and connect
        your wallet. Then, browse our selection of NFTs and choose the ones you
        want to gamble. Finally, enter the raffle for a chance to win big!
      </div>
      <div className="nftrich-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10">
        <SectionCard
          icon={joinNFTRich1}
          className="card1"
          title="What is NFTRich?"
          description="Lorem ipsum dolor sit amet consectetur. Proin quam id ipsum tortor sed id orci. Iaculis massa nec lectus amet gravida eget nec."
        />
        <SectionCard
          icon={joinNFTRich2}
          className="card2"
          title="What is NFTRich?"
          description="Lorem ipsum dolor sit amet consectetur. Proin quam id ipsum tortor sed id orci. Iaculis massa nec lectus amet gravida eget nec."
        />
        <SectionCard
          icon={joinNFTRich3}
          className="card3"
          title="What is NFTRich?"
          description="Lorem ipsum dolor sit amet consectetur. Proin quam id ipsum tortor sed id orci. Iaculis massa nec lectus amet gravida eget nec."
        />
        <SectionCard
          icon={joinNFTRich4}
          className="card4"
          title="What is NFTRich?"
          description="Lorem ipsum dolor sit amet consectetur. Proin quam id ipsum tortor sed id orci. Iaculis massa nec lectus amet gravida eget nec."
        />
      </div>
    </div>
  );
};

// exports
export default JoinNFTRich;

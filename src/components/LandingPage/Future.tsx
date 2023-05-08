// imports
import React from "react";
import firstCard from "../../assets/img/nftcard-front.png";
import secondCard from "../../assets/img/nftcard-left.png";
import thirdCard from "../../assets/img/nftcard-right.png";

import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, EffectCards } from "swiper";
import { Button } from "../_common/Buttons";
import { Card } from "../_common/Cards";
import ethereumIcon from "../../assets/img/ethereum.png";
import anonnft01Icon from "../../assets/img/anonnft01.png";

// const variables
const SLIDER_SETTING: SwiperProps = {
  effect: "cards",
  grabCursor: true,
};

// Future
const Future = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row my-10 w-full px-8 md:px-12 lg:px-24 py-20">
      <div className="xl:max-w-xl">
        <p className="font-clashGrotesk text-bold text-lg text-white">
          - LEFT 5 DAYS
        </p>
        <div>
          <p className="inline-block font-plusJakartaSans text-5xl text-transparent md:text-7xl lg:text-8xl leading-10 md:leading-tight font-extrabold bg-gradient-to-r from-babyBlue via-lavender to-magenta bg-clip-text">
            THE FUTURE
            <br />
            OF NFT
            <br />
            GAMBLING
          </p>
        </div>
        <p className="font-plusJakartaSans text-white text-sm md:text-lg leading-4 md:leading-6 mt-4 lg:mt-10 mb-8">
          Join our NFT and crypto community for a chance to win big prizes,
          learn about the latest trends, and connect with like-minded
          individuals. Don't miss out!
        </p>
        <Button className="btn-sm lg:btn-md">Sign Up</Button>
      </div>
      <div className="flex justify-center w-full">
        <div className="relative flex">
          <Card
            className="card1"
            type="image"
            coverImage={secondCard}
            title="Baby Boi #1665"
            description="HAPE PRIME"
            icon={<img src={anonnft01Icon} alt="anonymous nft icon" />}
          />
          <Card
            className="card2"
            type="image"
            coverImage={firstCard}
            title="Baby Boi #1664"
            description="HAPE PRIME"
            icon={<img src={ethereumIcon} alt="ethereum icon" />}
          />
          <Card
            className="card3"
            type="image"
            coverImage={thirdCard}
            title="Baby Boi #1666"
            description="HAPE PRIME"
          />
        </div>
      </div>
    </div>
  );
};

export default Future;

// imports
import React from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import { Card } from "../_common/Cards";
import featuredNft1 from "../../assets/img/featurednft-01.png";
import featuredNft2 from "../../assets/img/featurednft-02.png";
import featuredNft3 from "../../assets/img/featurednft-03.png";
import featuredNft4 from "../../assets/img/featurednft-04.png";
import featuredNft5 from "../../assets/img/featurednft-05.png";
import { LeftSwiperButton, RightSwiperButton } from "../_common/Buttons";

// types
// const SLIDER_SETTING: SwiperProps = {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   pagination: true,
//   slidesPerView: 1,
//   navigation: true,
//   spaceBetween: -100,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
// };
const SLIDER_SETTING: SwiperProps = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  pagination: false,
  slidesPerView: 2,
  spaceBetween: -150,
  initialSlide: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 180,
    modifier: 3,
    slideShadows: true,
  },
  navigation: {
    nextEl: "#swiper-button-next",
    prevEl: "#swiper-button-prev",
  },
};

// FeaturedNFT
const FeaturedNFT = () => {
  return (
    <div id="featurednft" className="w-full flex flex-col text-center py-20">
      <div>
        <p className="inline-block font-clashGrotesk font-semibold text-transparent text-2xl md:text-4xl bg-gradient-to-r from-magenta via-lavender to-babyBlue bg-clip-text">
          Featured NFTs
        </p>
      </div>
      <p className="font-plusJakartaSans text-white text-sm md:text-lg px-8 mb-12">
        Check out some of the hottest NFTs on our platform!
      </p>
      <div className="relative w-full lg:w-[calc(100% - 510px)] flex justify-center">
        <Swiper {...SLIDER_SETTING} modules={[Navigation, EffectCoverflow]}>
          <SwiperSlide>
            <Card
              type="video"
              coverImage={featuredNft1}
              title="Baby Boi #1664"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              type="video"
              coverImage={featuredNft2}
              title="Baby Boi #1665"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              type="video"
              coverImage={featuredNft3}
              title="Baby Boi #1666"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              type="video"
              coverImage={featuredNft4}
              title="Baby Boi #1666"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              type="video"
              coverImage={featuredNft5}
              title="Baby Boi #1666"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </SwiperSlide>
        </Swiper>
        <LeftSwiperButton
          id="swiper-button-prev"
          className="absolute top-1/2 left-5 z-10"
        />
        <RightSwiperButton
          id="swiper-button-next"
          className="absolute top-1/2 right-5 z-10"
        />
      </div>
    </div>
  );
};

// exports
export default FeaturedNFT;

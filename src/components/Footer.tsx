// imports
import React from "react";
import { Button } from "./_common/Buttons";

// Footer
const Footer = () => {
  return (
    <div id="footer" className="py-20 bg-black">
      <div className="flex flex-col items-center md:flex-row px-8 md:px-14 top-8">
        <div className="md:grow">
          <div className=" md:max-w-[250px] lg:max-w-[350px]">
            <div className="inline-block font-plusJakartaSans text-transparent text-2xl md:text-3xl lg:text-4xl leading-10 md:leading-tight font-extrabold bg-gradient-to-l from-babyBlue via-lavender to-magenta bg-clip-text">
              Subscribe our newsletter
              <span style={{ color: "initial" }}>💪</span>
            </div>
          </div>
        </div>
        <div className="flex bg-slate-700 rounded-lg pl-4 my-4 w-full md:w-auto">
          <input
            type="text"
            className="font-plusJakartaSans text-xs py-4 h-11 bg-transparent grow outline-none text-white"
            placeholder="Enter Your Email"
          />
          <Button className="btn-sm md:btn-md lg:btn-lg">Sign Up</Button>
        </div>
      </div>
      <div className="mx-[6.25%] my-8 border-b border-b-gray-20"></div>
      <div className="flex flex-col lg:flex-row px-14">
        <div className="grow">
          <p className="text-xl md:text-lg lg:text-2xl font-lato font-plusJakartaSans text-slate-200 mb-4">
            NFTRich
          </p>
          <p className="font-plusJakartaSans text-xs md:text-lg font-light text-gray-300 max-w-auto lg:max-w-[350px]">
            Got questions? We've got answers! Everything you need to know about
            the product and billing.
          </p>
        </div>
        <div className="flex flex-wrap grow">
          <div className="px-3 py-3 grow">
            <p className="text-sm md:text-lg font-medium font-plusJakartaSans text-slate-200 my-3">
              Company
            </p>
            <div className="font-plusJakartaSans text-xs font-light text-gray-300 flex flex-col gap-y-2">
              <a href="#about">About</a>
              <a href="#join">How to Participate</a>
              <a href="#featurednft">Featured NFTs</a>
              <a href="#freetrail">Free Trail</a>
              <a href="#footer">Testimonials</a>
              <a href="#faq">Faq</a>
            </div>
          </div>
          <div className="px-3 py-3 grow">
            <p className="text-sm md:text-lg font-medium font-plusJakartaSans text-slate-200 my-3">
              Help
            </p>
            <div className="font-plusJakartaSans text-xs font-light text-gray-300 flex flex-col gap-y-2">
              <a href="#about">Customer Support</a>
              <a href="#about">Raffle Support</a>
              <a href="#about">Terms & Conditions</a>
              <a href="#about">Privacy Policy</a>
            </div>
          </div>
          <div className="px-3 py-3 grow">
            <p className="text-sm md:text-lg font-medium font-plusJakartaSans text-slate-200 my-3">
              Resources
            </p>
            <div className="font-plusJakartaSans text-xs font-light text-gray-300 flex flex-col gap-y-2">
              <a href="#about">Free eBooks</a>
              <a href="#about">Raffle Tutorial</a>
              <a href="#about">How to - Raffle</a>
              <a href="#about">Youtube Playlist</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// exports
export default Footer;

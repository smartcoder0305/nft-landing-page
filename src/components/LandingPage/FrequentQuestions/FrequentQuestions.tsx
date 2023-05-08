//imports
import React from "react";
import QACard from "./QACard";

//FrequentQuestions
const FrequentQuestions = () => {
  return (
    <div id="faq" className="flex flex-col lg:flex-row py-20 px-14 gap-x-10">
      <div className="lg:min-w-[50%]">
        <div>
          <p className="inline-block font-plusJakartaSans text-transparent text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-magenta via-lavender to-babyBlue bg-clip-text">
            Frequently asked questions
          </p>
        </div>
        <p className="font-plusJakartaSans text-xs md:text-lg font-light text-gray-300 my-2">
          Got questions? We've got answers! Everything you need to know about
          the product and billing.
        </p>
        <a
          href="#footer"
          className="text-xs underline font-clashGrotesk text-magenta text-slate-200"
        >
          Contact Support
        </a>
      </div>
      <div className="my-10 lg:my-0">
        <QACard
          question="Is NFTRich safe and secure?"
          answer="Yes, we take the security and privacy of our users very seriously. Our platform uses the latest encryption and security protocols to ensure your data and NFTs are protected."
        />
        <hr />
        <QACard question="How do I withdraw my winnings?" answer="" />
        <hr />
        <QACard question="How do I know the raffle is fair?" answer="" />
        <hr />
        <QACard
          question="What types of NFTs are available for raffle on NFTRich?"
          answer=""
        />
      </div>
    </div>
  );
};

//exports
export default FrequentQuestions;

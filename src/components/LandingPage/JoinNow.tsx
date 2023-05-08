// imports
import React from "react";
import nftRichJoinNow from "../../assets/img/what-is-nftrich-bg.png";
import { Button } from "../_common/Buttons";

// JoinNow
const JoinNow = () => {
  return (
    <div id="freetrail" className="relative text-center mx-5 py-20 lg:my-10">
      <img
        src={nftRichJoinNow}
        className="w-full rounded-xl"
        alt="NFTRich join now"
      />
      <div className="flex flex-col items-center justify-around absolute top-0 left-0 z-10 py-10 w-full h-full">
        <p className="mt-8 text-xs md:text-lg font-bold font-ubuntu text-slate-200">
          Get A Free NFT
        </p>
        <p className="text-[6vw] leading-[7vw] font-bold text-slate-200">
          Join Now & Get A Free NFT
          <br />
          For Start Your First
          <br />
          Trading
        </p>
        <Button className="btn-sm md:btn-md mb-8 lg:btn-lg">
          Join & Trade Now
        </Button>
      </div>
    </div>
  );
};

//exports
export default JoinNow;

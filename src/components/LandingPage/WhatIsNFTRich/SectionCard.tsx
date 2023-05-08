// imports
import React from "react";

// types
type SectionCardProps = {
  icon?: string;
  title?: string;
  children?: React.ReactNode;
};

// SectionCard
const SectionCard = ({ icon, title, children }: SectionCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <img className="h-6" src={icon} alt="nftrich paragraph section symbol" />
      <p className="font-ubuntu font-bold text-slate-200 text-lg md:text-xl py-4">
        {title}
      </p>
      <div className="font-plusJakartaSans text-xs md:text-lg font-light text-gray-300 text-center px-2">
        {children}
      </div>
    </div>
  );
};

// exports
export default SectionCard;

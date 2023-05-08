// imports
import React, { useEffect, useRef } from "react";

// props
type SectionCardProps = {
  title: String;
  description: String;
  icon?: string;
  className?: string;
};

//exports
export const SectionCard = ({
  title,
  description,
  icon,
  className,
}: SectionCardProps) => {
  // hooks
  const SectionCardRef = useRef<HTMLDivElement>(null);

  // useEffect
  useEffect(() => {
    if (SectionCardRef.current) {
      SectionCardRef.current.addEventListener("mousemove", (event) => {
        // get cursor coordinates to container (the div itself).
        const { x, y } =
          SectionCardRef.current?.getBoundingClientRect() as DOMRect;

        // get relative coordinates.
        const relativeX = event.clientX - x;
        const relativeY = event.clientY - y;

        // apply coordinates values to CSS variables.
        SectionCardRef.current?.style.setProperty(
          "--x-cursor-position",
          relativeX.toString()
        );
        SectionCardRef.current?.style.setProperty(
          "--y-cursor-position",
          relativeY.toString()
        );
      });
    }
  }, []);

  // render
  return (
    <div
      className={`joinnft-card relative pt-24 pb-16 px-5 rounded-xl max-w-xl mx-auto ${className}`}
    >
      <div className="w-full absolute -top-8 left-0 flex justify-center z-10">
        <img className="h-16" src={icon} alt="nft-first-card" />
      </div>
      <div className="relative z-10">
        <div className="text-lg md:text-xl font-bold font-ubuntu text-slate-200 mb-5">
          {title}
        </div>
        <div className="font-plusJakartaSans text-base md:text-lg font-light text-gray-300 text-center">
          {description}
        </div>
      </div>
      <div
        className="gradient-effect absolute top-0 left-0 w-full h-full"
        ref={SectionCardRef}
      ></div>
    </div>
  );
};

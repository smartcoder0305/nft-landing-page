// imports
import React from "react";

// props
type SectionDividerProps = {
  className?: string;
  color?: string;
};

// SectionDivider
const SectionDivider = ({ className, color }: SectionDividerProps) => {
  return (
    <>
      <div
        className={`mx-[6.25%] my-8 border-b border-b-${
          color ?? "indigo-900"
        } md:hidden ${className}`}
      ></div>
      <div
        className={`mb-[3.25%] mx-8 border-l border-l-${
          color ?? "indigo-900"
        } hidden md:block ${className}`}
      ></div>
    </>
  );
};

// exports
export default SectionDivider;

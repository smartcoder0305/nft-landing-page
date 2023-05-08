// imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// types
type CardProps = {
  type: "video" | "image";
  coverImage: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
};

// exports
export const Card = ({
  type,
  coverImage,
  title,
  description,
  icon,
  className,
}: CardProps) => {
  return (
    <div className={`card ${className}`}>
      <div className={`z-10 ${type === "image" ? "image" : "video"}`}>
        <img src={coverImage} alt="nft-card" />
        <div className="flex items-center p-3">
          <div className="text-left grow">
            <div className="font-poppins text-purple-300 text-sm">{title}</div>
            <div className="text-white text-xs">{description}</div>
          </div>
          <div className="w-6 h-6">
            {type === "image" ? (
              icon && icon
            ) : (
              <div
                className="flex justify-center items-center pl-1 rounded-full w-7 h-7"
                style={{ backgroundColor: "#8F00FF" }}
              >
                <FontAwesomeIcon className="w-4 h-4" icon={faPlay} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="card-background"></div>
    </div>
  );
};

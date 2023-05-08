// imports
import React, { ForwardedRef, RefObject } from "react";
import hamburgerIcon from "../../assets/img/hamburger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// types
type ButtonProps = {
  variant?: "primary" | "secondary" | "text";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

type NavButtonProps = {
  href?: string;
  children: React.ReactNode;
};

type SwiperButtonProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

type HamburgerProps = {
  onClick?: () => void;
};

// exports
const Button = ({
  variant = "primary",
  onClick,
  className,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`px-8 py-3 rounded-xl transition-all text-sm font-semibold font-clashGrotesk btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
};

const Hamburger = React.forwardRef(
  ({ onClick }: HamburgerProps, ref: ForwardedRef<HTMLImageElement>) => {
    return (
      <button className="hamburger" onClick={onClick}>
        <FontAwesomeIcon size="2xl" color="white" icon={faBars} />
      </button>
    );
  }
);

const NavButton = ({ href, children }: NavButtonProps) => {
  return (
    <a href={href ?? "#"} className="nav-button">
      {children}
    </a>
  );
};

const LeftSwiperButton = ({ id, className }: SwiperButtonProps) => {
  return (
    <button
      id={id}
      className={`${className} group z-10 rounded-full border-sky-400 hover:border-white disabled:border-slate-100 disabled:opacity-30 border p-2 pl-3 transition-all bg-white/20 backdrop-blur-sm`}
    >
      <div className="w-4 h-4 border-l-4 border-b-4 rounded rotate-45 border-sky-200 group-hover:border-white group-disabled:border-slate-100"></div>
    </button>
  );
};

const RightSwiperButton = ({ id, className }: SwiperButtonProps) => {
  return (
    <button
      id={id}
      className={`${className} group z-10 rounded-full border-sky-400 hover:border-white disabled:border-slate-100 disabled:opacity-30 border p-2 pr-3 transition-all bg-white/20 backdrop-blur-sm`}
    >
      <div className="w-4 h-4 border-r-4 border-t-4 rounded rotate-45 border-sky-200 group-hover:border-white group-disabled:border-slate-100"></div>
    </button>
  );
};

export { Button, Hamburger, NavButton, LeftSwiperButton, RightSwiperButton };

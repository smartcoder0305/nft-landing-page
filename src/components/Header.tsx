// imports
import React, { useRef, useState } from "react";
import { Button, NavButton, Hamburger } from "./_common/Buttons";

// Navbar
const Header = () => {
  // hooks
  const [showMenu, setShowMenu] = useState(false);
  const hamburgerRef = useRef<HTMLImageElement>(null);

  // methods
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    if (hamburgerRef.current) {
      if (hamburgerRef.current !== ev.target) {
        setShowMenu(false);
      }
    }
  };

  // render
  return (
    <div className="fixed top-0 left-0 z-20 w-screen">
      <div className="navbar-container" onClick={handleClick}>
        <p className="logo-title">NFTRich</p>
        <div className="link-group">
          <NavButton href="#about">About</NavButton>
          <NavButton href="#join">How to Participate</NavButton>
          <NavButton href="#featurednft">Featured NFTs</NavButton>
          <NavButton href="#freetrail">Free Trail</NavButton>
          <NavButton href="#footer">Testimonials</NavButton>
          <NavButton href="#faq">Faq</NavButton>
        </div>
        <div className="button-group">
          <Button variant="text">Login</Button>
          <Button variant="secondary">Signup</Button>
        </div>
        <Hamburger ref={hamburgerRef} onClick={handleShowMenu} />
      </div>
      <div className={`${showMenu ? "block" : "hidden"} relative lg:hidden`}>
        <div
          className="absolute top-0 left-0 bg-transparent w-screen h-screen"
          onClick={() => setShowMenu(false)}
        ></div>
        <div className="absolute top-0 right-0 bg-indigo-900/90 px-12 py-6 w-full h-screen">
          <div
            className="flex flex-col text-center"
            onClick={() => setShowMenu(false)}
          >
            <NavButton href="#about">About</NavButton>
            <NavButton href="#join">How to Participate</NavButton>
            <NavButton href="#featurednft">Featured NFTs</NavButton>
            <NavButton href="#freetrail">Free Trail</NavButton>
            <NavButton href="#footer">Testimonials</NavButton>
            <NavButton href="#faq">Faq</NavButton>
            <div className="flex flex-col md:hidden">
              <Button variant="text">Login</Button>
              <Button variant="secondary">Signup</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

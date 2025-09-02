import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import BackgroundTexture from "./BackgroundTexture";

const Navbar = () => {
  return (
    <BackgroundTexture className="bg-banner-green w-full" variation="banner">
      <nav
        aria-label="Main navigation"
        className="m-auto flex flex-row justify-between items-center text-peach-cream-50 p-2"
      >
        <NavLink href="/" className="flex flex-row gap-2.5 items-center">
          <p className="text-3xl font-raleway font-semibold">JFW</p>
          <p className="text-lg font-raleway font-semibold m-0">Counselling</p>
        </NavLink>
        <div
          id="navLinks"
          className="flex flex-row gap-10 navLink items-center"
        >
          <NavLink href="/about-me">About Me</NavLink>
          <NavLink href="/">Fees & Availability</NavLink>
          <NavLink href="/">FAQ</NavLink>
          <NavLink href="/helpful-links">Helpful Links</NavLink>
          <NavLink href="/contact">
            <button className="btn btn-soft bg-peach-cream-50 border-peach-cream-50 text-banner-green rounded-xl hover:text-peach-cream-50 hover:bg-transparent hover:border-peach-cream-50">
              Contact Me
            </button>
          </NavLink>
        </div>
      </nav>
    </BackgroundTexture>
  );
};

export default Navbar;

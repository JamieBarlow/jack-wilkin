import React from "react";
import NavLink from "./NavLink";
import BackgroundTexture from "./BackgroundTexture";

const Navbar = () => {
  return (
    <BackgroundTexture
      className="bg-base-300 w-full text-base-100"
      variation="banner"
    >
      <nav
        aria-label="Main navigation"
        className="m-auto flex flex-row justify-between items-center px-4"
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
            <button className="btn btn-soft border-1 bg-base-100 border-base-100 text-base-300 rounded-xl hover:text-base-100 hover:bg-transparent hover:border-base-100">
              Contact Me
            </button>
          </NavLink>
        </div>
      </nav>
    </BackgroundTexture>
  );
};

export default Navbar;

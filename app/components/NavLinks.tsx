import React from "react";
import NavLink from "./NavLink";

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <div
      id="navLinks"
      className={`flex gap-10 navLink items-center text-base-100 ${className}`}
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
  );
};

export default NavLinks;

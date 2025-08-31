import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="relative bg-banner-green w-full">
      <div className="bg-texture"></div>
      <div className="relative z-10 p-10 text-peach-cream-50">
        <nav
          aria-label="Main navigation"
          className="m-auto flex flex-row justify-between items-center"
        >
          <Link href="/" className="flex flex-row gap-2.5 items-center">
            <p className="text-3xl font-raleway font-semibold">JFW</p>
            <p className="text-lg font-raleway font-semibold m-0">
              Counselling
            </p>
          </Link>
          <div id="navLinks" className="flex flex-row gap-10 navLink">
            <Link href="/about-me">About Me</Link>
            <Link href="/">Fees & Availability</Link>
            <Link href="/">FAQ</Link>
            <Link href="/helpful-links">Helpful Links</Link>
            <Link href="/contact">Contact Me</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

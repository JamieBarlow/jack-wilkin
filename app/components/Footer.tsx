import React from "react";
import BackgroundTexture from "./BackgroundTexture";
import NavLink from "./NavLink";
import Link from "next/link";

const Footer = () => {
  return (
    <BackgroundTexture
      className="bg-base-300 text-base-100 w-full"
      variation="banner"
    >
      <footer className="flex flex-row flex-wrap justify-between gap-4 px-4 py-8">
        <aside className="flex flex-col flex-1">
          <NavLink href="/" className="flex flex-col">
            <p className="text-3xl font-raleway font-semibold m-0">JFW</p>
            <p className="text-lg font-raleway font-semibold m-0">
              Counselling
            </p>
          </NavLink>
          <br />
        </aside>
        <nav className="flex flex-col flex-2">
          <h6 className="footer-title min-w-0 break-words">Get in touch</h6>
          <Link
            href="/"
            className="flex gap-2 items-center link link-hover my-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            01865 638627
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center link link-hover my-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>
            jack@jfwcounselling.com
          </Link>
          <Link
            href="/"
            className="flex gap-2 items-center link link-hover my-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            Oxford, UK
          </Link>
        </nav>
        <nav className="flex flex-col flex-2 min-w-1/4">
          <h6 className="footer-title">More Info</h6>
          <Link href="/about-me" className="link link-hover my-1">
            About Me
          </Link>
          <Link href="/" className="link link-hover my-1">
            Fees & Availability
          </Link>
          <Link href="/contact" className="link link-hover my-1">
            Contact
          </Link>
          <Link href="/helpful-links" className="link link-hover my-1">
            Helpful Links
          </Link>
        </nav>
        <aside className="flex flex-col flex-1">
          <Link
            href="https://www.psychologytoday.com/profile/1576711"
            className="sx-verified-seal w-2xs"
          >
            <img src="/BACP.png" alt="" />
          </Link>
        </aside>
      </footer>
    </BackgroundTexture>
  );
};

export default Footer;

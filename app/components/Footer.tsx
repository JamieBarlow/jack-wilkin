import React from "react";
import BackgroundTexture from "./BackgroundTexture";
import NavLink from "./NavLink";
import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

import { fetchFooter } from "@/app/api/contentfulPage";

const Footer = async () => {
  const footerData = await fetchFooter();

  return (
    <BackgroundTexture
      className="bg-base-300 text-base-100 w-full z-0"
      variation="banner"
    >
      <footer className="flex flex-row flex-wrap justify-between gap-x-4 gap-y-6 px-6 py-8">
        <aside className="flex flex-col flex-1">
          <NavLink href="/" className="flex flex-col text-base-100">
            <p className="text-3xl font-spectral font-medium m-0">JFW</p>
            <p className="hidden sm:block text-xl font-spectral font-medium m-0">
              Counselling
            </p>
          </NavLink>
          <br />
        </aside>
        <nav className="flex flex-col flex-2">
          <h6 className="footer-title min-w-0 break-words">Get in touch</h6>
          <div className="flex gap-2 items-center my-1">
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
            {footerData.phoneNumber}
          </div>
          <div className="flex gap-2 items-center my-1">
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
            {footerData.email}
          </div>
          <div className="flex gap-2 items-center my-1">
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
          </div>
        </nav>
        <nav className="flex flex-col flex-2 min-w-1/4">
          <h6 className="footer-title">More Info</h6>
          {footerData.internalLinks.map((item, index) => {
            return (
              <Link
                href={item.fields.url}
                className="link link-hover my-1"
                key={index}
              >
                {item.fields.name}
              </Link>
            );
          })}
        </nav>
        <aside className="flex flex-col sm:flex-row sm:flex-wrap justify-between flex-1 gap-2">
          {footerData.verification.map((img, index) => {
            return img.fields.link ? (
              <Link
                href={img.fields.link}
                className="sx-verified-seal w-[16rem]"
                key={index}
              >
                <ContentfulImage asset={img.fields.image} quality={100} />
              </Link>
            ) : (
              <div className="w-[16rem]" key={index}>
                <ContentfulImage asset={img.fields.image} quality={100} />
              </div>
            );
          })}
        </aside>
      </footer>
    </BackgroundTexture>
  );
};

export default Footer;

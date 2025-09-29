import React from "react";
import NavLink from "./NavLink";
import { fetchNavLinks } from "@/app/api/contentfulPage";
import type { NavLinks } from "@/app/api/contentfulPage";
// Disable caching for preview
export const revalidate = 0;

interface NavLinksProps {
  className?: string;
}

const NavLinks = async ({ className }: NavLinksProps) => {
  const navLinks = await fetchNavLinks();

  return (
    <div
      id="navLinks"
      className={`flex gap-10 navLink items-center text-base-100 ${className}`}
    >
      {navLinks.links.map((link, index) =>
        link.fields.isButton ? (
          <NavLink href={link.fields.url} key={index}>
            <button className="btn btn-soft border-1 bg-base-100 border-base-100 text-base-300 rounded-xl hover:text-base-100 hover:bg-transparent hover:border-base-100">
              {link.fields.name}
            </button>
          </NavLink>
        ) : (
          <NavLink href={link.fields.url} key={index}>
            {link.fields.name}
          </NavLink>
        )
      )}
    </div>
  );
};

export default NavLinks;

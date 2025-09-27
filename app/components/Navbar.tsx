import React from "react";
import NavLink from "./NavLink";
import BackgroundTexture from "./BackgroundTexture";
import NavLinks from "./NavLinks";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <BackgroundTexture
      className="bg-base-300 w-full text-base-100"
      variation="banner"
    >
      <div className="drawer sm:drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full">
            <div className="mx-2 flex-1 px-2">
              <NavLink href="/" className="flex flex-row gap-2.5 items-center">
                <p className="text-3xl font-spectral font-medium">JFW</p>
                <p className="hidden sm:block text-xl font-spectral font-medium m-0">
                  Counselling
                </p>
              </NavLink>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <NavLinks className="flex-row" />
              </ul>
            </div>
            <div className="flex-none lg:hidden z-50 fixed top-6 right-2  bg-base-300/30">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-300 min-h-full w-80 p-4 justify-center">
            {/* Sidebar content here */}
            <NavLinks className="flex-col" />
          </ul>
        </div>
      </div>
    </BackgroundTexture>
  );
};

export default Navbar;

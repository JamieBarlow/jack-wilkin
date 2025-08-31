import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink = ({ href, className, children }: NavLinkProps) => {
  return (
    <Link href={href} className={`${className} hover:text-peach-cream-400`}>
      {children}
    </Link>
  );
};

export default NavLink;

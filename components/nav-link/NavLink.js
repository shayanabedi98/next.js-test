"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './NavLink.module.css'

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;

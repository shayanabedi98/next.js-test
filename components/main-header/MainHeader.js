import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "../nav-link/NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals" children="Browse Meals" />
            </li>
            <li>
              <NavLink href="/community" children="Foodies Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;

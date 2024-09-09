"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import "./Navbar.css";
import navLinksData from "./Navbar.json";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="header">
        <div className="container">
          <Link href="/" passHref>
            <h1>
              MoSe<span className="primary">App</span>
            </h1>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navLinksData.navLinks.map((link, index) => (
              <li key={index} onClick={handleClick}>
                <Link href={link.url} passHref>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

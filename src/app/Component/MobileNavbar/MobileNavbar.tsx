"use client";
import "./MobileNavbar.css";
import { humburger, close } from "@/public/assets/images/index";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileNavbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <nav>
      {/* small screen */}
      <div className="app__navbar-small-screen">
        <Image
          src={humburger}
          alt="humburger icon"
          width={30}
          className="navbar__humburger"
          onClick={() => settoggleMenu(true)}
        />
        {toggleMenu && (
          <div className="smallscreen-overlay flex__center">
            <Image
              src={close}
              alt="close icon"
              width={30}
              className="navbar__close-icon"
              onClick={() => settoggleMenu(false)}
            />
            <ul className="smallscreen_ul">
              <li>
                <Link href="#home" onClick={() => settoggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/Sections/About"}
                  onClick={() => settoggleMenu(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Sections/Services"
                  onClick={() => settoggleMenu(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/Sections/Skills"}
                  onClick={() => settoggleMenu(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href={"/Sections/Project"}
                  onClick={() => settoggleMenu(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href={"/Sections/Contact"}
                  onClick={() => settoggleMenu(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNavbar;

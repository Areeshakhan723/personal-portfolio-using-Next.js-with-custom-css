import Link from "next/link";
import MobileNav from "../MobileNavbar/MobileNavbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="app__header">
      <nav>
        <ul className="header__ul">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Sections/About" aria-label="About section">
              About
            </Link>
          </li>
          <li>
            <Link href="/Sections/Services">Services</Link>
          </li>
          <li>
            <Link href="/Sections/Skills">Skills</Link>
          </li>
          <li>
            <Link href="/Sections/Project">Projects</Link>
          </li>
          <li>
            <Link href="/Sections/Contact">Contact</Link>
          </li>
        </ul>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;

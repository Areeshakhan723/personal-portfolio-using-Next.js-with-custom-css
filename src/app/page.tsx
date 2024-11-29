import './globals.css';
import "./page.module.css";

import Header from "./Sections/Header/page";
import About from "./Sections/About/page";
import Services from "./Sections/Services/page";
import Contact from "./Sections/Contact/page"
import Projects from "./Sections/Project/page";
import Skills from "./Sections/Skills/page"
export default function Home() {
  return (
    <>
      <section><Header /></section>
      <section><About /></section>
      <section><Services /></section>
      <section><Skills /></section>
      <section><Projects /></section>
      <section><Contact /></section>
    </>
  );
}

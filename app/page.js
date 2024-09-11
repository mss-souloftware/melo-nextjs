"use client"
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Canvas from "./components/Canvas";
import SecondSec from "./components/SecondSec/SecondSec";
import Accordion from "./components/Accordion/Accordion";
import Heading from "./components/Heading/Heading";
import SecondPro from "./components/SecondPro/SecondPro";
import Marquee from "./components/Marquee/Marquee";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="mainGradient">
        <Header />
        <Canvas />
        <Hero />
        <SecondSec />
      </div>
      <Heading />
      <Accordion />
      <SecondPro />
      <Marquee />
      <Footer />
    </>
  );
}

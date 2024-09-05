import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Canvas from "./components/Canvas";
import SecondSec from "./components/SecondSec/SecondSec";
import Accordion from "./components/Accordion/Accordion";

export default function Home() {
  return (
    <>
      <div className="mainGradient">
        <Header />
        <Canvas />
        <Hero />
        <SecondSec />
      </div>
      <Accordion />
    </>
  );
}

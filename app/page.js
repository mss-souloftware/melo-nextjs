import Image from "next/image";
import Hero from "./components/Hero/hero";
import Header from "./components/Header/Header";
import Canvas from "./components/Canvas";

export default function Home() {
  return (
    <>
      <Header />
      <Canvas />
      <Hero />
    </>
  );
}

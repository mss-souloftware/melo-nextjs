"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "locomotive-scroll/src/locomotive-scroll.scss"; // Import the styles
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Canvas from "./components/Canvas";
import SecondSec from "./components/SecondSec/SecondSec";
import Accordion from "./components/Accordion/Accordion";
import Heading from "./components/Heading/Heading";
import SecondPro from "./components/SecondPro/SecondPro";
import Marquee from "./components/Marquee/Marquee";
import Footer from "./components/Footer/Footer";
const LocomotiveScroll = dynamic(
  () => import("locomotive-scroll").then((mod) => mod.default),
  {
    ssr: false,
  }
);

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollRef = useRef(null);
  const [locomotiveScroll, setLocomotiveScroll] = useState(null); // Track Locomotive instance

  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll;

      // Initialize Locomotive Scroll
      const initScroll = async () => {
        const LocomotiveScrollModule = await import("locomotive-scroll");
        scroll = new LocomotiveScrollModule.default({
          el: scrollRef.current,
          smooth: true,
          smoothMobile: true,
          lerp: 0.06,
          multiplier: 1,
        });

        setLocomotiveScroll(scroll); // Set Locomotive instance in state

        // Sync Locomotive Scroll with GSAP ScrollTrigger
        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? scroll.scrollTo(value, 0, 0)
              : scroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: scrollRef.current.style.transform ? "transform" : "fixed",
        });

        // Refresh ScrollTrigger and Locomotive Scroll when page updates
        ScrollTrigger.addEventListener("refresh", () => {
          if (scroll && scroll.update) scroll.update();
        });
        ScrollTrigger.refresh();
      };

      initScroll();

      return () => {
        if (scroll && scroll.destroy) {
          scroll.destroy();
        }
        ScrollTrigger.removeEventListener("refresh", () => {
          if (scroll && scroll.update) scroll.update();
        });
      };
    }
  }, []);

  return (
    <div id="mainWrapperContainer" data-scroll-container ref={scrollRef}>
      <div className="mainGradient">
        <Header />
        <Canvas locomotive={locomotiveScroll} />
        <Hero />
        <SecondSec locomotive={locomotiveScroll} />
      </div>
      <Heading locomotive={locomotiveScroll} />
      <Accordion />
      <SecondPro />
      <Marquee />
      <Footer />
    </div>
  );
}

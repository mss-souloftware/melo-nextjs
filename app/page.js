"use client";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollRef = useRef(null);
  const [locomotiveScroll, setLocomotiveScroll] = useState(null); // Track Locomotive instance

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize Locomotive Scroll
      const scroll = new LocomotiveScroll({
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
      ScrollTrigger.addEventListener("refresh", () => scroll.update());
      ScrollTrigger.refresh();

      return () => {
        if (scroll) scroll.destroy();
        ScrollTrigger.removeEventListener("refresh", () => scroll.update());
      };
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <div className="mainGradient">
        <Header />
        {/* Pass the locomotiveScroll instance to the Canvas component */}
        <Canvas locomotive={locomotiveScroll} />
        <Hero />
        <SecondSec />
      </div>
      <Heading />
      <Accordion />
      <SecondPro />
      <Marquee />
      <Footer />
    </div>
  );
}

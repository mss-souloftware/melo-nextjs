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

import loadingStyle from "./Loading.module.css";
import Image from "next/image";
import CanBanner from "./components/CanBanner/CanBanner";

const LocomotiveScroll = dynamic(
  () => import("locomotive-scroll").then((mod) => mod.default),
  {
    ssr: false,
  }
);

gsap.registerPlugin(ScrollTrigger);

const LoadingScreen = () => (
  <div className={`${loadingStyle.loadingWrapper}`}>
    <Image src="/images/logo_melo.webp" alt="Melo" width={300} height={108} />
  </div>
);

export default function Home() {
  const scrollRef = useRef(null);
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [canvasLoaded, setCanvasLoaded] = useState(false); // State for Canvas loading
  const [isScreenLarge, setIsScreenLarge] = useState(false); // Screen size state

  useEffect(() => {
    // Check screen width on component mount
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth > 800);
    };

    handleResize(); // Set the initial screen size

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const initialize = async () => {
      if (typeof window !== "undefined") {
        let scroll;

        // LocomotiveScroll initialization promise
        const initLocomotiveScroll = new Promise(async (resolve) => {
          const LocomotiveScrollModule = await import("locomotive-scroll");
          scroll = new LocomotiveScrollModule.default({
            el: scrollRef.current,
            smooth: true,
            // smoothMobile: true,
            lerp: 0.06,
            multiplier: 1,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          });

          setLocomotiveScroll(scroll);

          // GSAP ScrollTrigger setup with LocomotiveScroll
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

          ScrollTrigger.addEventListener("refresh", () => {
            if (scroll && scroll.update) scroll.update();
          });
          ScrollTrigger.refresh();

          resolve(); // LocomotiveScroll fully initialized
        });

        // Wait for both LocomotiveScroll and Canvas to load
        await Promise.all([initLocomotiveScroll, canvasLoaded]);

        setLoading(false); // All components are loaded
      }
    };

    initialize();

    return () => {
      if (locomotiveScroll && locomotiveScroll.destroy) {
        locomotiveScroll.destroy();
      }
    };
  }, [canvasLoaded]); // Re-run when Canvas loads

  return (
    <div id="mainWrapperContainer" data-scroll-container ref={scrollRef}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="mainGradient">
          <Header />
          <Hero />
          {isScreenLarge ? (
            <Canvas
              onLoad={() => setCanvasLoaded(true)}
              locomotive={locomotiveScroll}
            />
          ) : (
            <CanBanner />
          )}
          {/* Callback when Canvas finishes loading */}
          <SecondSec locomotive={locomotiveScroll} />
          <Heading locomotive={locomotiveScroll} />
          <Accordion />
          <SecondPro />
          <Marquee />
          <Footer />
        </div>
      )}
    </div>
  );
}

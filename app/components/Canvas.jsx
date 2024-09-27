"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Canvas.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Canvas({ locomotive }) {
  const canvasRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  const images = useRef([]);
  const frameIndex = useRef(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !locomotive) return;
  
    const loadImages = () => {
      const totalImages = 237;
      let loadedImages = 0;
  
      for (let i = 1; i <= totalImages; i++) {
        const img = new Image();
        img.src = `/images/canvas/${i}.webp`;
  
        img.onload = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setAllImagesLoaded(true);
            ScrollTrigger.refresh(); // Refresh ScrollTrigger after images load
            if (locomotive && locomotive.update) locomotive.update(); // Update LocomotiveScroll
          }
        };
  
        images.current.push(img);
      }
    };
  
    const drawImage = (index) => {
      const img = images.current[index];
      const ctx = canvasRef.current.getContext("2d");
      if (img && ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        const scale = Math.min(
          canvasRef.current.width / img.width,
          canvasRef.current.height / img.height
        );
        const x = canvasRef.current.width / 2 - (img.width / 2) * scale;
        const y = canvasRef.current.height / 2 - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };
  
    const handleScroll = () => {
      if (typeof document !== "undefined") {
        const scrollTop = locomotive.scroll.instance.scroll.y;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScroll;
        frameIndex.current = Math.min(
          images.current.length - 1,
          Math.floor(scrollFraction * images.current.length)
        );
        drawImage(frameIndex.current);
      }
    };
  
    loadImages();
  
    // if (allImagesLoaded) {
      locomotive.on("scroll", handleScroll);
  
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: canvasWrapperRef.current,
          scroller: locomotive?.el,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          markers: false,
        },
      });
  
      timeline.fromTo(
        canvasWrapperRef.current,
        { right: "-120px", position: "fixed", transform: "translateX(0)" },
        {
          right: "calc(50% - 310px)",
          position: "fixed",
          duration: 2,
          ease: "sine.inOut",
        }
      );
  
      drawImage(0);
      // locomotive.on("scroll", ScrollTrigger.update);
      // ScrollTrigger.refresh(); // Make sure ScrollTrigger is updated
  
      // Make sure LocomotiveScroll is updated
      // if (locomotive && locomotive.update) locomotive.update();
    // }
  
    // return () => {
    //   locomotive.off("scroll", handleScroll);
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // };
  },);
  

  return (
    <div
      className="canvasWrappe"
      ref={canvasWrapperRef}
      data-scroll
      data-scroll-sticky
      data-scroll-target="#mainWrapperContainer"
      style={{
        position: "fixed",
        top: "50px",
        right: "-120px",
        zIndex: 1,
        transform: "translateX(0)",
      }}
    >
      <Link
        href="#"
        className={`${styles.buyBtn} flex items-center bg-[#FFC700] px-2 py-1`}
      >
        <svg
        className="mr-1"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Buy Now
      </Link>
      <canvas ref={canvasRef} width="620px" height="620px"></canvas>
    </div>
  );
}

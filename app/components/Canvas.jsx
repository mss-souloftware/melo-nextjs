"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Canvas.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Canvas({ locomotive }) {
  const canvasRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  const images = useRef([]);
  const frameIndex = useRef(0);

  useEffect(() => {
    if (!locomotive) return; // Ensure locomotive scroll is passed before proceeding

    const loadImages = () => {
      const totalImages = 170;
      for (let i = 1; i <= totalImages; i++) {
        const img = new Image();
        img.src = `/images/canvas/${i}.webp`;
        images.current.push(img);
      }

      images.current[0].onload = () => {
        drawImage(0);
      };
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
      const scrollTop = locomotive.scroll.instance.scroll.y; // Use Locomotive's scroll position
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      frameIndex.current = Math.min(
        images.current.length - 1,
        Math.floor(scrollFraction * images.current.length)
      );
      drawImage(frameIndex.current);
    };

    loadImages();

    locomotive.on("scroll", handleScroll); // Listen to Locomotive's scroll event

    // Updated GSAP timeline for smooth transition
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: canvasWrapperRef.current,
        scroller: locomotive?.el, // Use Locomotive's container as the scroller
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
        right: "calc(50% - 310px)", // Ensure it stays within the center of the screen
        position: "fixed",
        duration: 2,
        ease: "sine.inOut",
      }
    );

    drawImage(0);

    // Refresh ScrollTrigger when locomotive scroll updates
    locomotive.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh(); // Refresh scroll positions

    return () => {
      locomotive.off("scroll", handleScroll); // Clean up Locomotive's scroll event
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [locomotive]);

  return (
    <div
      className="canvasWrapper"
      ref={canvasWrapperRef}
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
        Buy Now
      </Link>
      <canvas ref={canvasRef} width="620px" height="620px"></canvas>
    </div>
  );
}

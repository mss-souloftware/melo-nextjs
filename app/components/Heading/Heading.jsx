import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Heading.module.css";

export default function Heading({ locomotive }) {
  const headingSecRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !locomotive) return;

    const handleScroll = () => {
      if (typeof document !== "undefined") {
        const scrollTop = locomotive.scroll.instance.scroll.y;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScroll;
      }
    };

    locomotive.on("scroll", handleScroll);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: headingSecRef.current,
        scroller: locomotive?.el,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        markers: false,
        pin: true,
      },
    });

    timeline.fromTo(
      headingSecRef.current,
      {
        background:
          "linear-gradient( 135deg,rgba(255, 157, 30, 1) 16%,rgba(255, 91, 90, 1) 74%)",
      },
      {
        background: "#234987",
      }
    );

    locomotive.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh(); // Refresh ScrollTrigger to ensure it works after all images are loaded

    return () => {
      locomotive.off("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [locomotive]);

  return (
    <section className={`${styles.headingsection} py-60`} ref={headingSecRef}>
      <h2
        class={`${styles.headignTitle} text-white uppercase font-extrabold w-full`}
      >
        DAYTIME CRAZY <span>NIGHTTIME HAZY</span>
          &nbsp;ALL VIBES, NO LIES!
      </h2>
    </section>
  );
}

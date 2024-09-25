import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SecondSec.module.css";

export default function SecondSec({ locomotive }) {
  const secondSecRef = useRef(null);

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
        trigger: secondSecRef.current,
        scroller: locomotive?.el,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        markers: false,
        pin: true,
      },
    });

    timeline.fromTo(
      secondSecRef.current,
      {
        background: "#A22574",
      },
      {
        background: "#FF9D1E",
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
    <section className={`${styles.secondSec} mt-40 pb-60`} ref={secondSecRef}>
      <div className="flex justify-between">
        <div className="leftData w-1/2">
          <div className={styles.leftSideData}>
            <div>
              <span>Stay sick 🤙 🤧 not sick</span>
            </div>
          </div>
        </div>
        <div className={`${styles.rightData} w-1/2 pl-40 pr-5`}>
          <span className="text-white uppercase">
            TRY something totally new
          </span>
          <h2 className="text-white uppercase font-bold my-5">
            we mix madness, genius, and a pinch of chaos to bring you the best
            sips in the universe.
          </h2>
          <p className="text-white">
            Transforming the Alternative Alcohol Space. Welcome to Melo, where
            we&apos;re not just crafting THC seltzers; we&apos;re
            revolutionizing the way you unwind. Born from the desire to offer a
            groundbreaking alternative to traditional alcoholic beverages, Melo
            is here to redefine your chill moments, one sip at a time. Catering
            specifically to the vibrant 20-30 year old crowd, we&apos;re on a
            mission to turn every gathering, solo chill, or casual hangout into
            an experience that&apos;s both memorable and mindful.
          </p>
        </div>
      </div>
    </section>
  );
}

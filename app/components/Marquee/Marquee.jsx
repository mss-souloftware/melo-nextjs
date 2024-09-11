import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Marquee.module.css";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const items = marquee.children;

    // Calculate the width of all text items combined
    const totalWidth = Array.from(items).reduce(
      (acc, item) => acc + item.offsetWidth,
      0
    );

    gsap.to(marquee, {
      x: `-=${totalWidth}`, // move the text to the left by the total width
      duration: 25, // adjust the speed as needed
      repeat: -1, // infinite loop
      ease: "none", // constant speed
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`, // reset the position for seamless animation
      },
    });
  }, []);

  return (
    <div className={`${styles.marqueeStyle} overflow-hidden whitespace-nowrap`}>
      <div ref={marqueeRef} className="inline-block">
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
        <span className="text-lg px-4">The Best THC Cocktails</span>
      </div>
    </div>
  );
};

export default Marquee;

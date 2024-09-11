"use client";
import React, { useState } from "react";
import styles from "./SecondPro.module.css";

export default function SecondPro() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`${styles.accordionMain} py-40`}>
      <div className="flex justify-between">
        <div className={`${styles.accordionSocials} w-1/2`}>
          <h2 className="uppercase font-bold text-white">GRAPEFRUIT</h2>
          <p className="text-white">
            Hold onto your taste buds because MELO Grapefruit Seltzer is about
            to blow your mind! This isn&apos;t just any seltzer – a zesty, tangy
            explosion of grapefruit goodness that&apos;ll excite your mouth. Each THC
            infused Drink can is packed with ripe grapefruit&apos;s bold, refreshing
            flavor, ready to electrify your senses. And guess what? We&apos;re
            elevating your experience with 5mg of THC per can with zero
            hangover.
          </p>
        </div>
        <div
          className={`${styles.accordionData} w-1/2 space-y-4 pl-40 pr-5 relative`}
        >
          <span className="text-white uppercase">Microdose THC Seltzer</span>
          <ul>
            <li className="text-white">01. Lorem ipsum dolor, sit amet</li>
            <li className="text-white">02. Lorem ipsum dolor, sit amet</li>
            <li className="text-white">03. Lorem ipsum dolor, sit amet</li>
            <li className="text-white">04. Lorem ipsum dolor, sit amet</li>
          </ul>
          {/* {accordionItems.map((item, index) => (
            <div key={item.id} className="">
              <button
                className={`${styles.accordionTab} w-full text-left py-4 px-6 text-white focus:outline-none rounded`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="p-6 text-white">{item.content}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import styles from "./Accordion.module.css";
import Image from "next/image";

const accordionItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content: "This is the content for Accordion Item 1.",
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content: "This is the content for Accordion Item 2.",
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content: "This is the content for Accordion Item 3.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`${styles.accordionMain} py-40`}>
      <div className="flex justify-between">
        <div className={`${styles.accordionSocials} w-1/2`}>
          <h2 className="uppercase font-bold text-white">Wild Berries</h2>
          <p className="text-white">
            Get ready to take your taste buds on a rollercoaster of flavor with
            MELO Wild Berries Seltzer! This ain’t your grandma’s seltzer – it’s
            a wild party in a can! Each sip packs a punch of juicy black cherry,
            bold pomegranate, and a medley of wild berries to make your mouth
            dance with joy. But that’s not all, folks! We’re bringing the good
            times with a chill twist – 5mg of THC per can elevate your vibes to
            the next level.
          </p>
        </div>
        <div className={`${styles.accordionData} w-1/2 space-y-4 pl-40 pr-5 relative`}>
          <span className="text-white uppercase">Microdose THC Seltzer</span>
          <ul>
            <li className="text-white">
              01. Lorem ipsum dolor, sit amet 
            </li>
            <li className="text-white">
              02. Lorem ipsum dolor, sit amet 
            </li>
            <li className="text-white">
              03. Lorem ipsum dolor, sit amet 
            </li>
            <li className="text-white">
              04. Lorem ipsum dolor, sit amet 
            </li>
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

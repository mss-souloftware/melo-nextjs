"use client"
import React, { useState } from "react";
import styles from "./Accordion.module.css";

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
    <section className={`${styles.accordionMain} py-10`}>
      <div className="flex justify-between">
        <div className="socialProof w-1/2"></div>
        <div className="accordionData w-1/2 space-y-4 pl-40 pr-5 relative z-30">
          {accordionItems.map((item, index) => (
            <div key={item.id} className="border-b border-gray-300">
              <button
                className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="p-6">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

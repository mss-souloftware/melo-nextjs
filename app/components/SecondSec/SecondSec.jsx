import React from "react";
import styles from "./SecondSec.module.css";

export default function SecondSec() {
  return (
    <section className="mt-40 mb-96">
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
            we're not just crafting THC seltzers; we're revolutionizing the way
            you unwind. Born from the desire to offer a groundbreaking
            alternative to traditional alcoholic beverages, Melo is here to
            redefine your chill moments, one sip at a time. Catering
            specifically to the vibrant 20-30 year old crowd, we're on a mission
            to turn every gathering, solo chill, or casual hangout into an
            experience that's both memorable and mindful.
          </p>
        </div>
      </div>
    </section>
  );
}

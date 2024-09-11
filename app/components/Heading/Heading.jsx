import React from "react";
import styles from "./Heading.module.css";

export default function Heading() {
  return (
    <section className={`${styles.headingsection} py-60`}>
      <h2 class={`${styles.headignTitle} text-white uppercase font-extrabold w-full`}>
        DAYTIME CRAZY <span>NIGHTTIME HAZY</span>
          &nbsp;ALL VIBES, NO LIES!
      </h2>
    </section>
  );
}

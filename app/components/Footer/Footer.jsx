import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section className={`${styles.footer}`}>
      <h2>
        GET<br></br> BOOSTED
        <Link href="#">
          <svg
            width="126"
            height="127"
            viewBox="0 0 126 127"
            fill="none "
            class="footer_icon__arrow__3VR8l"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M63 124.814c33.69 0 61-27.31 61-61s-27.31-61-61-61-61 27.31-61 61 27.31 61 61 61zm0 2c34.794 0 63-28.206 63-63s-28.206-63-63-63-63 28.206-63 63 28.206 63 63 63zm25-86.586L40.207 88.021l-1.414-1.414 47.793-47.793H37v-2h53v54h-2V40.228z"
              fill="#fff"
            ></path>
          </svg>
        </Link>
      </h2>

      <div className="footerBottom mt-20 flex md:flex-row flex-col items-center">
        <div className="md:w-1/3 w-full">
          <Image
            src="/images/logo_melo.webp"
            width={200}
            height={100}
            alt="Melo"
          />
          <p className="text-white mt-10 md:mb-0 mb-5">©2024</p>
        </div>
        <div className="md:w-1/3 w-full flex justify-between">
          <ul>
            <li>
              <Link className="text-white uppercase" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase" href="/">
                Shop
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase" href="/">
                About
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link className="text-white uppercase" href="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase" href="/">
                Terms
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase" href="/">
                Privacy
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link className="text-white uppercase" href="/">
                Instagram
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase" href="/">
                Tiktok
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase" href="/">
                Facebook
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3 w-full text-center">
          <p className="text-white text-center text-sm md:mt-0 mt-5">
            Text us - your 24/7 immunity consultants
          </p>
          <Link
            className="border border-white px-5 py-3 rounded text-white text-xl text-center mt-5 mx-auto inline-block"
            href="tel:888-317-1784"
          >
            888-317-1784
          </Link>
        </div>
      </div>
    </section>
  );
}

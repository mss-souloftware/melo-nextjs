import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/app/components/Canvas.module.css"

export default function CanBanner() {
  return (
    <div className="text-center relative">
      <Image
        className="mx-auto"
        src="/images/heroBanner.webp"
        alt="Melo"
        width={300}
        height={500}
      />
      <Link
        href="https://meloseltzer.com/products/grapefruit"
        className={`${styles.buyBtn} flex items-center bg-[#FFC700] px-2 py-1`}
      >
        <svg
          className="mr-1"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Buy Now
      </Link>
    </div>
  );
}

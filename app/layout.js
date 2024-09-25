import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discover the Perfect Buzz: Premium THC-Infused Seltzer | THC Beverages &ndash Melo",
  description: "xperience the ultimate social sip with MELO&#39;s THC-infused seltzer. Crafted for balance and enjoyment, our low-dose THC beverages offer a smooth, enjoyable buzz without the hangover. Perfect for unwinding or socializing, find your sweet spot with MELO. Refreshingly natural, delightfully social.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haaga & Warfield | A Thoughtful Succession Path",
  description:
    "Haaga & Warfield is seeking to acquire and personally operate one enduring business, providing a thoughtful succession path for owners considering their next chapter.",
  openGraph: {
    title: "Haaga & Warfield | A Thoughtful Succession Path",
    description:
      "Haaga & Warfield is seeking to acquire and personally operate one enduring business, providing a thoughtful succession path for owners considering their next chapter.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}

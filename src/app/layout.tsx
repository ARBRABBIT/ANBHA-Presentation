import type { Metadata } from "next";
import { Cormorant_Upright, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Upright({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "ANBHA · Brand Identity Presentation",
  description: "The story and identity of ANBHA. Pure Silver. Endless Stories.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}

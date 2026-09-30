import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const motionConfig = {
  duration: { fast: 0.4, normal: 0.8, slow: 1.4, cinematic: 2 },
  ease: { standard: "power2.out", smooth: "power3.out", cinematic: "power4.inOut" },
} as const;

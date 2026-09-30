"use client";

import Image from "next/image";
import { useRef } from "react";
import { Logo, LogoMark } from "@/components/logo/Logo";
import { ChapterLabel, Container, SectionTitle } from "@/components/layout/Primitives";
import { Reveal } from "@/components/animation/Reveal";
import { useGsap } from "@/hooks/useGsap";
import { gsap } from "@/lib/gsap";

export function HeroSection() {
  return (
    <section id="story" className="hero-section flex min-h-svh items-center justify-center bg-paper text-forest">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="hero-logo opacity-0"><Logo /></div>
        <p className="hero-tagline mt-7 font-display text-xl italic opacity-0 md:text-2xl">Pure Silver. Endless Stories</p>
        <div className="hero-subtitle mt-14 flex items-center gap-4 font-ui text-[9px] uppercase tracking-[.35em] opacity-0">
          <span className="h-px w-8 bg-current" />Brand Identity Presentation<span className="h-px w-8 bg-current" />
        </div>
      </div>
      <span className="absolute bottom-8 font-ui text-[9px] uppercase tracking-[.25em] text-forest/45">Scroll to discover</span>
    </section>
  );
}

export function OpeningSection() {
  return (
    <section className="flex min-h-[90vh] items-center bg-paper py-28 text-forest">
      <Container>
        <ChapterLabel number="01">The Story</ChapterLabel>
        <div className="mt-20 max-w-5xl md:ml-[12%]">
          <Reveal><p className="font-display text-[clamp(3rem,7vw,7.5rem)] leading-[.98] tracking-[-.045em]">Every jewellery brand<br />tells a story.</p></Reveal>
          <Reveal delay={0.18}><p className="mt-10 max-w-xl font-body text-lg leading-relaxed text-forest/65 md:ml-auto">ANBHA begins with purity, meaning, and timeless elegance.</p></Reveal>
        </div>
      </Container>
    </section>
  );
}

export function InspirationSection() {
  return (
    <section className="relative min-h-[115vh] overflow-hidden bg-forest text-paper">
      <div className="parallax-photo absolute inset-0">
        <Image src="/brand/lotus/lotus-reference.png" alt="An ivory lotus bloom on deep green water" fill sizes="100vw" className="object-cover opacity-65" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,59,50,.84),rgba(25,59,50,.08)_65%)]" />
      </div>
      <Container className="relative z-10 flex min-h-[115vh] flex-col justify-center">
        <Reveal><p className="font-ui text-[10px] uppercase tracking-[.32em] text-sage">The inspiration</p></Reveal>
        <Reveal delay={0.12}><SectionTitle className="mt-8 max-w-4xl">Rooted in<br /><em className="font-normal">purity.</em></SectionTitle></Reveal>
        <Reveal delay={0.22}><p className="mt-10 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg">The ANBHA identity is inspired by the lotus associated with Goddess Lakshmi — a symbol of purity, grace, prosperity, and divine beauty.</p></Reveal>
      </Container>
    </section>
  );
}

export function TransformationSection() {
  const section = useRef<HTMLElement>(null);
  useGsap(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timeline = gsap.timeline({ scrollTrigger: { trigger: section.current, start: "top top", end: "+=320%", pin: true, scrub: 1 } });
    timeline
      .to(".transform-copy", { opacity: 0, y: -35, duration: 0.7 })
      .to(".transform-photo", { scale: 1.24, opacity: 0.22, duration: 1.4 }, "<")
      .fromTo(".petal-trace path", { strokeDashoffset: 600 }, { strokeDashoffset: 0, duration: 1.6, stagger: 0.06 }, "<.25")
      .to(".transform-photo", { opacity: 0, duration: 1 })
      .to(".petal-trace", { scale: 0.72, opacity: 0.35, duration: 1.1 }, "<")
      .fromTo(".final-mark", { opacity: 0, scale: 0.82 }, { opacity: 1, scale: 1, duration: 1.1 }, "<.15")
      .fromTo(".final-label", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "<.35");
  }, section);

  return (
    <section ref={section} className="relative h-svh overflow-hidden bg-sage text-forest">
      <Image src="/brand/lotus/lotus-reference.png" alt="" fill sizes="100vw" className="transform-photo object-cover opacity-55" />
      <div className="absolute inset-0 bg-sage/20" />
      <div className="transform-copy absolute left-5 top-24 z-10 max-w-lg md:left-20 md:top-28">
        <p className="font-ui text-[10px] uppercase tracking-[.32em]">From symbol to identity</p>
        <h2 className="mt-5 font-display text-[clamp(2.7rem,5vw,5.5rem)] leading-[.95] tracking-[-.045em]">We looked beyond<br />the flower.</h2>
        <p className="mt-6 text-sm text-forest/65">And found the form within it.</p>
      </div>
      <svg className="petal-trace absolute left-1/2 top-1/2 z-10 w-[min(75vw,720px)] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 700 560" fill="none" aria-label="Lotus petals resolving into simplified geometry">
        {["M350 500C326 340 329 208 350 56c21 152 24 284 0 444Z","M342 470C222 416 131 322 82 188c135 38 226 132 260 282Z","M358 470c120-54 211-148 260-282-135 38-226 132-260 282Z","M337 390C235 327 189 232 202 113c101 67 147 159 135 277Z","M363 390c102-63 148-158 135-277-101 67-147 159-135 277Z"].map((d) => <path key={d} d={d} stroke="currentColor" strokeWidth="2" strokeDasharray="600" />)}
      </svg>
      <div className="final-mark absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 opacity-0"><LogoMark className="w-[min(42vw,260px)]" /></div>
      <div className="final-label absolute inset-x-0 bottom-12 z-20 text-center font-ui text-[10px] uppercase tracking-[.32em] opacity-0">Organic form · refined geometry · enduring symbol</div>
    </section>
  );
}

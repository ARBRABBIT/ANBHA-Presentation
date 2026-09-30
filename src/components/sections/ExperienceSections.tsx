"use client";

import Image from "next/image";
import { Reveal } from "@/components/animation/Reveal";
import { ChapterLabel, Container, SectionTitle } from "@/components/layout/Primitives";
import { Logo, LogoMark } from "@/components/logo/Logo";
import { BrowserMockup, PhoneMockup } from "@/components/mockups/DeviceMockups";

export function PackagingSection() {
  return (
    <section id="experience" className="bg-paper py-28 text-forest md:py-40">
      <Container><ChapterLabel number="04">The Experience</ChapterLabel><div className="mt-16 grid gap-8 md:grid-cols-2"><SectionTitle className="text-[clamp(3.5rem,6vw,7rem)]">The story,<br /><em className="font-normal">unwrapped.</em></SectionTitle><p className="max-w-md self-end text-sm leading-relaxed text-forest/60">The ANBHA identity extends across packaging to create a premium and memorable unboxing experience.</p></div></Container>
      <Reveal className="mx-auto mt-16 max-w-[1600px] px-3 md:px-10"><div className="packaging-hero"><Image src="/brand/packaging/packaging-hero.png" alt="ANBHA jewellery boxes, pouch, shopping bag, and stationery in the brand palette" fill sizes="(max-width: 768px) 100vw, 1500px" className="object-cover" /><div className="package-stamp"><LogoMark className="w-10" /><span>ANBHA</span></div></div></Reveal>
      <Container className="mt-5 grid gap-5 md:grid-cols-[1.2fr_.8fr]">
        <div className="collateral-card dark"><span>AUTHENTICITY · 925</span><Logo light compact /><p>Made to become part of your story.</p></div>
        <div className="collateral-card"><span>JEWELLERY CARE</span><LogoMark className="w-12" /><p>Keep dry · Store softly · Wear often</p></div>
      </Container>
    </section>
  );
}

export function WebsiteSection() {
  return (
    <section className="overflow-hidden bg-forest py-28 text-paper md:py-40">
      <Container><div className="grid gap-10 md:grid-cols-2"><div><p className="eyebrow text-sage">Digital experience — website</p><SectionTitle className="mt-7 text-[clamp(3.5rem,6vw,7rem)]">A quiet<br />digital <em className="font-normal">stage.</em></SectionTitle></div><p className="max-w-md self-end text-sm leading-relaxed text-paper/60">A clean, elegant environment where customers can explore collections with the same calm refinement as the physical brand.</p></div><Reveal className="mt-16"><BrowserMockup /></Reveal></Container>
    </section>
  );
}

export function MobileSection() {
  return (
    <section className="bg-sage py-28 text-forest md:py-40">
      <Container><div className="grid items-center gap-16 md:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Digital experience — mobile</p><SectionTitle className="mt-7 text-[clamp(3.5rem,6vw,7rem)]">Grace,<br />in your <em className="font-normal">hand.</em></SectionTitle><p className="mt-8 max-w-sm text-sm leading-relaxed text-forest/60">On mobile, the identity remains graceful and refined—an immersive jewellery experience without the noise.</p></div><div className="phone-stage"><PhoneMockup /><PhoneMockup variant={1} /></div></div></Container>
    </section>
  );
}

export function BrandFeelSection() {
  const words = ["Pure", "Elegant", "Timeless", "Graceful", "Premium"];
  return (
    <section className="bg-paper py-28 text-forest md:py-44"><Container><p className="eyebrow text-center">How ANBHA feels</p><div className="mt-16 flex flex-col items-center">{words.map((word, index) => <Reveal key={word} delay={index * .06}><p className={`font-display text-[clamp(3.5rem,9vw,9rem)] leading-[.86] tracking-[-.055em] ${index % 2 ? "italic text-forest/40" : ""}`}>{word}</p></Reveal>)}</div><p className="mx-auto mt-20 max-w-xl text-center text-sm leading-relaxed text-forest/60">ANBHA is designed to feel calm, luxurious, and meaningful—a brand that celebrates silver through simplicity and storytelling.</p></Container></section>
  );
}

export function ClosingSection() {
  return (
    <footer className="flex min-h-svh items-center bg-forest py-24 text-paper"><Container className="text-center"><p className="mx-auto max-w-2xl font-display text-3xl leading-tight md:text-5xl">Inspired by the lotus of Lakshmi, ANBHA is more than a logo—it is a symbol of purity, prosperity, and timeless beauty.</p><div className="mx-auto my-16 h-20 w-px bg-paper/20" /><div className="flex flex-col items-center"><Logo light /><p className="mt-6 font-display text-xl italic text-sage">Pure Silver. Endless Stories</p></div><p className="mt-20 font-ui text-[9px] uppercase tracking-[.28em] text-paper/35">Inspired by purity · Designed for stories that last</p></Container></footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { Logo, LogoMark, Wordmark } from "@/components/logo/Logo";
import { ChapterLabel, Container, SectionTitle } from "@/components/layout/Primitives";
import { Reveal } from "@/components/animation/Reveal";
import { brandColors, meanings } from "@/data/brand";

export function LogoRevealSection() {
  return (
    <section id="identity" className="flex min-h-svh items-center bg-forest py-28 text-paper">
      <Container>
        <ChapterLabel number="02" light>The Identity</ChapterLabel>
        <div className="mt-16 grid items-center gap-16 md:grid-cols-[.8fr_1.2fr]">
          <Reveal className="flex justify-center"><LogoMark className="w-[min(50vw,300px)]" /></Reveal>
          <div>
            <Reveal><p className="font-ui text-[10px] uppercase tracking-[.3em] text-sage">The ANBHA logo</p></Reveal>
            <Reveal delay={0.1}><SectionTitle className="mt-6">Tradition,<br /><em className="font-normal">refined.</em></SectionTitle></Reveal>
            <Reveal delay={0.2}><p className="mt-8 max-w-lg leading-relaxed text-paper/65">A refined identity inspired by tradition, designed for a modern silver jewellery brand.</p></Reveal>
          </div>
        </div>
        <Reveal delay={0.25} className="mt-24 border-t border-paper/15 pt-10">
          <Logo light compact /><p className="mt-3 font-display text-sm italic text-paper/55">Pure Silver. Endless Stories</p>
        </Reveal>
      </Container>
    </section>
  );
}

export function MeaningSection() {
  return (
    <section className="bg-paper py-28 text-forest md:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="eyebrow">What the logo represents</p><SectionTitle className="mt-7 text-[clamp(3.5rem,6vw,7rem)]">Meaning<br />in every<br /><em className="font-normal">line.</em></SectionTitle></div>
          <div className="border-t border-forest/20">
            {meanings.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.06} className="meaning-row">
                <span className="font-ui text-[10px] text-forest/40">0{index + 1}</span>
                <h3 className="font-display text-2xl md:text-4xl">{title}</h3>
                <p className="text-sm leading-relaxed text-forest/55">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ColorSection() {
  return (
    <section className="bg-paper text-forest">
      <Container className="py-28 md:py-40">
        <p className="eyebrow">Brand colors</p>
        <SectionTitle className="mt-7 max-w-5xl">A palette of<br /><em className="font-normal">quiet confidence.</em></SectionTitle>
      </Container>
      <div className="color-fields">
        {brandColors.map((color, index) => (
          <motion.article key={color.hex} className="color-field" style={{ backgroundColor: color.hex, color: index === 2 ? "#F9F9F9" : "#193B32" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .8 }}>
            <div><span className="font-ui text-[10px] uppercase tracking-[.2em] opacity-55">{color.name}</span><p className="mt-3 font-display text-3xl md:text-5xl">{color.hex}</p></div>
            <div className="max-w-md"><p className="font-display text-2xl leading-tight md:text-4xl">{color.words.join(". ")}.</p><p className="mt-5 text-sm leading-relaxed opacity-60">{color.description}</p></div>
          </motion.article>
        ))}
      </div>
      <div className="grid min-h-[38vh] grid-cols-3" aria-label="The three ANBHA brand colors together">
        {brandColors.map((color) => <div key={color.hex} style={{ backgroundColor: color.hex }} />)}
      </div>
    </section>
  );
}

export function TypographySection() {
  return (
    <section className="overflow-hidden bg-sage py-28 text-forest md:py-40">
      <Container>
        <div className="flex items-end justify-between border-b border-forest/20 pb-8"><div><p className="eyebrow">Typography</p><h2 className="mt-5 font-display text-5xl md:text-7xl">Editorial restraint.</h2></div><span className="hidden font-ui text-[10px] uppercase tracking-[.2em] md:block">Two voices · one character</span></div>
        <div className="grid gap-16 py-16 md:grid-cols-2">
          <div><span className="type-meta">Display / Cormorant Garamond</span><p className="mt-8 font-display text-[clamp(5rem,15vw,13rem)] leading-[.7] tracking-[-.08em]">Aa</p><p className="mt-10 font-display text-4xl italic">Pure Silver.<br />Endless Stories.</p></div>
          <div className="flex flex-col justify-between border-t border-forest/20 pt-8 md:border-l md:border-t-0 md:pl-16 md:pt-0"><div><span className="type-meta">Utility / Manrope</span><p className="mt-8 font-body text-2xl leading-relaxed">The typography balances elegance and clarity—helping the brand feel premium, modern, and timeless.</p></div><p className="mt-16 font-ui text-xs uppercase leading-[2.2] tracking-[.24em]">ANBHA — PURE SILVER<br />ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />0123456789</p></div>
        </div>
      </Container>
      <Wordmark className="block translate-x-[-2vw] whitespace-nowrap text-[25vw] leading-[.65] text-forest/10" />
    </section>
  );
}
